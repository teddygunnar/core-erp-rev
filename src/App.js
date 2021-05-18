import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Dashboard } from "./Component";
// import { GetClientKey } from "./api";
import { key } from "./redux/actions/auth";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

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
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
