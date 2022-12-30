import styles from "./CompleteTask.module.css";
import { ReactComponent as Arrow } from "../../../assets/completeTask/arrow.svg";
import { ReactComponent as Platform } from "../../../assets/completeTask/platform.svg";
import { ReactComponent as Shield } from "../../../assets/completeTask/shield.svg";
import { ReactComponent as Dart } from "../../../assets/completeTask/dart.svg";
import { ReactComponent as Clouds } from "../../../assets/completeTask/clouds.svg";
import { ReactComponent as Trophy } from "../../../assets/completeTask/trophy.svg";
import { Animated } from "react-animated-css";

const CompleteTask = ({ type, title, onClick }) => {
  return (
    <div className={styles.completeWrap}>
      <div className={styles.complete}>
        <Animated animationIn="fadeInLeft">
          <p
            className={
              type === "challenge"
                ? styles.completeInfo_challange
                : styles.completeInfo
            }
          >
            COMPLETED:
          </p>
        </Animated>
        <Animated animationInDelay={1500} animationIn={"lightSpeedIn"}>
          <Animated animationInDelay={2500} animationIn={"rubberBand"}>
            <span className={styles.questName}>{title}</span>
          </Animated>
        </Animated>
      </div>
      <div className={styles.award}>
        <Animated animationInDelay={1000} animationIn="fadeInDown">
          {type === "challenge" ? (
            <Animated animationInDelay={2000} animationIn="tada">
              <Trophy className={styles.trophy}></Trophy>
            </Animated>
          ) : (
            <Shield className={styles.shield}></Shield>
          )}
        </Animated>
        <Animated animationInDelay={1000} animationIn={"fadeInUp"}>
          <Platform
            className={
              type === "challenge" ? styles.platform_challange : styles.platform
            }
          ></Platform>
        </Animated>
        {type === "challenge" ? null : <Dart className={styles.dart}></Dart>}
        <Clouds
          className={
            type === "challenge" ? styles.clouds_challange : styles.clouds
          }
        ></Clouds>
      </div>
      <div className={styles.continueWrap}>
        <Animated animationInDelay={3200} animationIn="fadeInUp">
          <button
            className={
              type === "challenge" ? styles.button_challange : styles.button
            }
            onClick={onClick}
          >
            Continue <Arrow className={styles.arrow}></Arrow>
          </button>
        </Animated>
      </div>
    </div>
  );
};

export default CompleteTask;
