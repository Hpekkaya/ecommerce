//// admin sayfası
import React from "react";
import styles from "./Admin.module.scss";
import Navbar from "../../components/admin/navbar/Navbar";
import { Routes, Route} from "react-router-dom";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.navbar}>
        <Routes>
          <Route
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
