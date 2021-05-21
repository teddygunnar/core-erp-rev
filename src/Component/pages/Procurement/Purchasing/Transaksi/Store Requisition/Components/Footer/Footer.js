import React from "react";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Print from "@material-ui/icons/Print";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.menuFooter}>
      <Button
        component={Link}
        to="/form"
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#3F63F5",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<Add fontSize="large" />}
      >
        Add New
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#1D3557",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<Print fontSize="large" />}
      >
        Print
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#F65A7A",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<Close fontSize="large" />}
      >
        Cancel
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#00AF9E",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<Check fontSize="large" />}
      >
        Closing
      </Button>
      <Button
        className={classes.menuFooterMore}
        variant="contained"
        style={{
          backgroundColor: "white",
          color: "grey",
          textTransform: "none",
        }}
        endIcon={<MoreHoriz fontSize="large" style={{ color: "black" }} />}
      ></Button>
    </div>
  );
};

export default Footer;
