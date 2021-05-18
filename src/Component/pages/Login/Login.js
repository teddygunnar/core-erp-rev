import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Copyright from "@material-ui/icons/Copyright";
import Phone from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { SignIn } from "../../../api/";
import ActionType from "../../../redux/reducers/constant";

//image
import LoginBackground from "../../assets/images/background-login.png";
import Logo from "../../assets/images/logo.svg";

// const initialState = { username: "", password: "" };

const Login = () => {
  //USED STATE
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState("");

  //REACT-REDUX
  const dispatch = useDispatch();

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
    const SessionLogin =
      userLogin.data.rsLogin.SESSION_LOGIN_INFO[0].SESSION_LOGIN_ID;

    if (RESULT_CODE === "01") {
      setMessage(MESSAGE);
      localStorage.setItem("auth", SessionLogin);
      setAuth(SessionLogin);
      dispatch({
        type: ActionType.SET_SESSION_LOGIN_ID,
        sessionLoginId: SessionLogin,
      });
      dispatch({ type: ActionType.SET_USER_ID, userId: username });
    } else {
      setAuth(null);
      setMessage(MESSAGE);
    }
    dispatch({ type: ActionType.LOADING, loading: false });
    console.log(userLogin);
  };

  //SUBMITTING THE LOGIN FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ActionType.LOADING, loading: true });
    if (username && password) {
      setLogin(username, password);
    } else {
      dispatch({ type: ActionType.LOADING, loading: false });
    }
  };

  //LOGIN INTERFACE
  return (
    <div
      className="login"
      style={{
        // backgroundColor: "#EEF1FA",
        height: "100vh",
        width: "100%",
        display: "flex",
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
        minWidth: "800px",
      }}
    >
      <div
        style={{
          width: "50%",
          //   backgroundColor: "red",
          height: "calc(100% - 200px)",
          margin: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="login-a"
      >
        <div>
          <IconButton
            style={{
              height: 120,
              width: 120,
              borderRadius: 50,
            }}
          >
            <img src={Logo} style={{ height: 150, width: 150 }} alt="logo" />
          </IconButton>
          <Typography
            variant="h3"
            style={{ color: "white", fontWeight: "bold" }}
          >
            We Provide
          </Typography>
          <span
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 1.5,
            }}
          >
            The world leading company System
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            style={{ color: "white" }}
            control={<Copyright fontSize="small" />}
            label={
              <span style={{ fontSize: "13px", paddingLeft: 5 }}>
                PT Jala Informatica
              </span>
            }
          />
          <FormControlLabel
            style={{ color: "white" }}
            control={<Phone fontSize="small" />}
            label={
              <span style={{ fontSize: "13px", paddingLeft: 5 }}>
                08170066000
              </span>
            }
          />
        </div>
      </div>

      <div
        style={{
          width: "50%",
          height: "calc(100% - 200px)",
          margin: "100px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        className="login-b"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "350px",
            height: "430px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: "10px 30px",
            alignItems: "center",
            borderRadius: 10,
            boxShadow: "0px 2px 5px rgba(0,0,0,.2)",
          }}
        >
          <div style={{ height: 40 }} />
          <div style={{ alignSelf: "flex-start" }}>
            <Typography
              variant="h5"
              style={{ color: "#2975D9", fontWeight: "bold" }}
            >
              Welcome
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "grey", fontSize: "16px" }}
            >
              Enter your username and password
            </Typography>
          </div>
          <div style={{ height: 30 }} />
          <FormControl style={{ width: "100%" }}>
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton disabled style={{ padding: 5, color: "#2975D9" }}>
                    <Person />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div style={{ height: 30 }} />
          <div style={{ width: "100%", flexDirection: "row" }}>
            <FormControl style={{ width: "100%" }}>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      disabled
                      style={{ padding: 5, color: "#2975D9" }}
                    >
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div style={{ height: 20 }} />
          <div style={{ alignSelf: "flex-start" }}>
            <FormControlLabel
              style={{ color: "grey" }}
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  style={{ color: "#2975D9" }}
                />
              }
              label={<span style={{ fontSize: "14px" }}>Remember Me</span>}
            />
          </div>

          <div style={{ height: 30 }} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#2975D9",
              borderRadius: 100,
            }}
          >
            Login
          </Button>
          <div style={{ height: 15 }} />
          {message ? (
            <Typography variant="body2" color="error">
              {message}
            </Typography>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
