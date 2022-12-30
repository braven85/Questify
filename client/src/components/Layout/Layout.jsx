import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import {
  TodayContainer,
  TomorrowContainer,
  DoneContainer,
} from "../../containers";
import styles from "./Layout.module.css";

const Layout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-bg)";
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.section_container}>
        <TodayContainer />
        <TomorrowContainer />
        <DoneContainer />
      </div>
    </>
  );
};

export default Layout;
