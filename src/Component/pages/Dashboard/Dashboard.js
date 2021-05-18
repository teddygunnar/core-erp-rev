import React, { useEffect } from "react";
import { Navbar } from "../../";

const Dashboard = () => {
  useEffect(() => {
    localStorage.getItem("auth");
    localStorage.getItem("userId");
  }, [localStorage]);

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
