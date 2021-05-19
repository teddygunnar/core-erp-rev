import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import ActionType from "../../redux/reducers/constant";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Navbar = ({ isAuth, companyList, getCompanyList }) => {
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  //Breakdown menu user
  const handleClickUser = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleCloseUser = () => {
    setUserAnchorEl(null);
  };

  //Breakdown company list
  const handleClickMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  useEffect(() => {
    if (isAuth) {
      getCompanyList(
        localStorage.getItem("userId"),
        localStorage.getItem("auth")
      );
    } else {
      getCompanyList(null);
    }
  }, [isAuth]);

  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const logout = () => {
    dispatch({ type: ActionType.LOGOUT });
    MySwal.fire({
      title: <p>You're logged out now!</p>,
      footer: "Thanks for coming!",
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <AppBar
      className={styles.appBar}
      position="static"
      color="transparent"
      style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}
    >
      <Typography variant="h6">PT. Jala Informatica</Typography>
      <Toolbar className={styles.toolBar}>
        <IconButton onClick={handleClickMenu}>
          <Settings style={{ color: "#3f63f5" }} />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(menuAnchorEl)}
          onClose={handleCloseMenu}
        >
          {companyList.map((get, i) => (
            <MenuItem
              key={i}
              selected={get.CompanyName}
            >{`${get.CompanyName} - ${get.Company_ID}`}</MenuItem>
          ))}
        </Menu>
        <div className={styles.userBox}>
          <IconButton onClick={handleClickUser}>
            <AccountCircleIcon />
          </IconButton>
          <Typography>{user}</Typography>
        </div>
        <Menu
          userAnchorEl={userAnchorEl}
          open={Boolean(userAnchorEl)}
          onClose={handleCloseUser}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={logout}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
