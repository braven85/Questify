import React from "react";
import styles from "./Info.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Info = ({ cardType, calendar, title, updatedTime, isDone, doneDate }) => {
  const deadlineRange = 1000 * 60 * 60 * 3; // 3 Hours
  const checkIfDeadline = () => {
    if (updatedTime) {
      if (updatedTime.getTime() <= new Date().getTime() + deadlineRange) {
        return true;
      }
    }
    return false;
  };
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          y: 0,
        }}
        initial={{
          y: "-20px",
        }}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0.4,
        }}
        className={styles.quest_info}
      >
        <p
          className={
            cardType !== "quest" ? styles.challenge_task : styles.quest_task
          }
        >
          {title}
        </p>
        <div className={styles.quest_row}>
          <p className={styles.quest_time}>
            {isDone
              ? `${doneDate}`
              : cardType === "quest"
              ? `${calendar} `
              : `by ${calendar} `}
          </p>
          {checkIfDeadline() ? (
            <svg className={styles.icon_fire} viewBox="0 0 45 32">
              <path d="M5.548 32c-3.546-11.722 3.946-16.001 3.946-16.001-0.524 6.255 3.019 11.128 3.019 11.128 1.303-0.395 3.79-2.238 3.79-2.238 0 2.238-1.312 7.109-1.312 7.109s4.594-3.564 6.040-9.483c1.444-5.919-2.751-11.861-2.751-11.861 0.253 4.189-1.16 8.31-3.928 11.458 0.138-0.161 0.255-0.338 0.344-0.532 0.497-0.998 1.296-3.591 0.828-9.596-0.658-8.429-8.271-11.984-8.271-11.984 0.656 5.136-1.311 6.319-5.92 16.068-4.609 9.747 4.215 15.932 4.215 15.932z"></path>
            </svg>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export { Info };
