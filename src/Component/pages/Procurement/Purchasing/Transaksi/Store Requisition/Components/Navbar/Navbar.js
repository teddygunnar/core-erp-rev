import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Container className={styles.container}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <h1>Navbar</h1>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
