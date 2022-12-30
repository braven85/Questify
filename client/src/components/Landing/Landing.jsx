import React, { useEffect } from "react";
import LandingInfo from "./LandingInfo";
import LandingForm from "./LandingForm";
import Background from "./Background";
import styles from "./Landing.module.css";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div>
      <Background></Background>
    </div>
  );
};

export default Landing;
