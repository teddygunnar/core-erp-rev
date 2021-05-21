import React, { useEffect, useState } from "react";
import { Login, Dashboard } from "./Component";
// import { GetClientKey } from "./api";
import { key } from "./redux/actions/auth";
import { fetchTableList } from "./redux/actions/tableData";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { SignIn, CompanyList, TableData } from "./api";
import ActionType from "./redux/reducers/constant";

const App = () => {
  //UTILS
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  //USE STATE
  const [message, setMessage] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));
  const [companyList, setCompanyList] = useState([]);

  //GET Table Procurement SR
  const getTableList = async (session) => {
    const body = {
      rqSRList: {
        COMPANY_ID: "TBP",
        SITE_ID: "CAMP",
        USER_ID: "dilly",
        SESSION_LOGIN_ID: session,
        FILTER_DAY: "ALL",
        FILTER_MONTH: "05",
        FILTER_YEAR: "2020",
        FILTER_COLOUMN: "",
        FILTER_VALUE: "",
        PAGE_NO: "1",
      },
    };

    try {
      const {
        data: { rsSRList },
      } = await TableData(body);
      return Array.from(rsSRList);
    } catch (error) {
      console.log(error);
    }
  };

  //GET COMPANY LIST
  const getCompanyList = async (username, session) => {
    const body = {
      rqCompanyList: {
        USER_ID: username,
        SESSION_LOGIN_ID: session,
      },
    };
    const fetchCompanyList = await CompanyList(body);
    console.log(fetchCompanyList);

    let { RESULT_CODE } = fetchCompanyList.data.rsCompanyList;

    if (RESULT_CODE === "01") {
      setCompanyList(fetchCompanyList.data.rsCompanyList.DATA);
    }
  };

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
    <div>
      {!isAuth ? (
        <div>
          <Login
            setLogin={setLogin}
            message={message}
            setMessage={setMessage}
          />
        </div>
      ) : (
        <div>
          <Dashboard
            isAuth={isAuth}
            setCompanyList={setCompanyList}
            companyList={companyList}
            getCompanyList={getCompanyList}
            setIsAuth={setIsAuth}
            getTableList={getTableList}
          />
        </div>
      )}
    </div>
  );
};

export default App;
