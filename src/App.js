import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Dashboard } from "./Component";
// import { GetClientKey } from "./api";
import { key } from "./redux/actions/auth";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SignIn } from "./api";
import ActionType from "./redux/reducers/constant";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  //USED STATE
  const [message, setMessage] = useState("");

  const [isAuth, setIsAuth] = useState("");

  //LOGIN FUNCTION
  const setLogin = async (username, password) => {
    const body = {
      rqlogin: {
        USER_ID: username,
        PASSWORD: password,
        IP: "121.131.1313",
      },
    };
    const userLogin = await SignIn(body);
    let { RESULT_CODE, MESSAGE } = userLogin.data.rsLogin;
    let SessionLogin =
      userLogin.data.rsLogin.SESSION_LOGIN_INFO[0].SESSION_LOGIN_ID;

    if (RESULT_CODE === "01") {
      setMessage(MESSAGE);
      localStorage.setItem("auth", SessionLogin);
      localStorage.setItem("userId", username);
      setIsAuth(SessionLogin);
      dispatch({
        type: ActionType.SET_SESSION_LOGIN_ID,
        sessionLoginId: SessionLogin,
      });
      dispatch({
        type: ActionType.SET_USER_ID,
        userId: username,
      });
    } else {
      setIsAuth(null);
      setMessage(MESSAGE);
    }
    // dispatch({ type: ActionType.LOADING, loading: false });

    console.log(userLogin);
  };

  useEffect(() => {
    const fetchData = async () => {
      const body = {
        rqClientGetKey: {
          CLIENT_ID: "ERP_001",
        },
      };
      // const clientKey = await GetClientKey(body);
      // console.log(clientKey);
      dispatch(key(body));
    };
    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {!isAuth.length ? (
          <div>
            <Login
              setLogin={setLogin}
              message={message}
              setMessage={setMessage}
            />
          </div>
        ) : (
          <div>
            <Dashboard />
          </div>
        )}
        <Route
          path="/"
          exact
          render={(props) => (
            <Login
              {...props}
              setLogin={setLogin}
              message={message}
              setMessage={setMessage}
            />
          )}
        />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
