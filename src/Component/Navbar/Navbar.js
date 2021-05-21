import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import ActionType from "../../redux/reducers/constant";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ArrowDropDown } from "@material-ui/icons";

const Navbar = ({ setIsAuth, isAuth, companyList, getCompanyList }) => {
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [useranchorel, setuseranchorel] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  //Breakdown menu user
  const handleClickUser = (event) => {
    setuseranchorel(event.currentTarget);
  };

  const handleCloseUser = () => {
    setuseranchorel(null);
  };

  //Breakdown company list
  const handleClickMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  //Fetch company data
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

  //LOGOUT function
  const logout = () => {
    dispatch({ type: ActionType.LOGOUT });
    handleCloseUser();
    setIsAuth(null);
    MySwal.fire({
      title: <p>You're logged out now!</p>,
      footer: "Thanks for coming!",
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
        <IconButton onClick={handleClickMenu} style={{ borderRadius: 5 }}>
          <Settings
            style={{
              color: "#3f63f5",
            }}
          />
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
              onClick={handleCloseMenu}
              key={i}
            >{`${get.CompanyName} - ${get.Company_ID}`}</MenuItem>
          ))}
        </Menu>
        <Button
          className={styles.userBox}
          onClick={handleClickUser}
          endIcon={<ArrowDropDownIcon />}
        >
          <AccountCircleIcon style={{ margin: "0px 5px" }} />
          <Typography>{user}</Typography>
        </Button>
        <Menu
          useranchorel={useranchorel}
          open={Boolean(useranchorel)}
          onClose={handleCloseUser}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleCloseUser}>Profile</MenuItem>
          <MenuItem onClick={logout}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
