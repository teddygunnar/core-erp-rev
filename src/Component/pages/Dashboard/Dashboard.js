import React from "react";
import { Navbar } from "../../";

const Dashboard = ({ isAuth, setCompanyList, companyList, getCompanyList }) => {
  return (
    <div>
      <Navbar
        companyList={companyList}
        setCompanyList={setCompanyList}
        getCompanyList={getCompanyList}
        isAuth={isAuth}
      />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
