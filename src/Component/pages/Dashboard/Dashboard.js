import React, { useEffect } from "react";
import { Navbar, Sidebar } from "../../";
import styles from "./Dashboard.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  StoreRequisition,
  CanvasSheet,
  PurchaseOrder,
  PurchaseRequisition,
  PerubahanLokasi,
} from "../../";

// <Route
// path="/"
// exact
// render={(props) => (
//   <Login
//     {...props}
//     setLogin={setLogin}
//     message={message}
//     setMessage={setMessage}
//   />
// )}
// />

const Dashboard = ({
  setIsAuth,
  isAuth,
  setCompanyList,
  companyList,
  getCompanyList,
  getTableList,
}) => {
  useEffect(() => {
    getTableList(localStorage.getItem("auth"));
  }, []);

  return (
    <Router>
      <div className={styles.dashboard}>
        <Navbar
          companyList={companyList}
          setCompanyList={setCompanyList}
          getCompanyList={getCompanyList}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
        />

        <div className={styles.dashboardMainContainer}>
          <div className={styles.sideBarContainer}>
            <Sidebar />
          </div>
          <div className={styles.dashboardMainContent}>
            <Route path="/" exact component={Home} />
            <Route path="/store-requisition" component={StoreRequisition} />
            <Route path="/canvas-sheet" component={CanvasSheet} />
            <Route path="/purchase-order" component={PurchaseOrder} />
            <Route
              path="/purchase-requisition"
              component={PurchaseRequisition}
            />
            <Route path="/perubahan-lokasi" component={PerubahanLokasi} />
          </div>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Dashboard;
