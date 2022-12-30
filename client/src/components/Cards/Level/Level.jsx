import React from "react";
import styles from "./Level.module.css";
import { ReactComponent as Trophy } from "../../../assets/challange/trophy.svg";

const Level = ({
  level,
  onClick,
  createMode,
  updateMode,
  endQuest,
  type,
  isDone,
}) => {
  return (
    <>
      {createMode || updateMode ? (
        <div
          className={
            type === "challenge" ? styles.challenge_topEdit : styles.card_top
          }
        >
          <button type="button" className={styles.card_row} onClick={onClick}>
            <div
              className={
                level === "Normal"
                  ? styles.card_circle_green
                  : level === "Easy"
                  ? styles.card_circle_blue
                  : styles.card_circle_red
              }
            ></div>
            <p className={styles.card_text}>{level}</p>
            <svg
              className={styles.arrow_icon}
              viewBox="0 0 85 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42.667 32l-36.95-32h73.901l-36.95 32z"></path>
            </svg>
          </button>
          <button
            className={`${styles.card_button} ${styles.pointer_off}`}
            type="button"
          >
            {type === "challenge" ? (
              <Trophy />
            ) : (
              <svg
                className={`${styles.star_icon} ${styles.star_off}`}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.608 11.163l-8.812-0.833c-0.556-0.050-1.036-0.404-1.263-0.934l-3.156-7.651c-0.505-1.263-2.298-1.263-2.803 0l-3.131 7.651c-0.202 0.53-0.707 0.884-1.263 0.934l-8.813 0.833c-1.313 0.126-1.843 1.768-0.859 2.651l6.641 5.833c0.429 0.379 0.606 0.934 0.48 1.49l-1.995 8.181c-0.303 1.288 1.086 2.348 2.247 1.667l7.348-4.318c0.48-0.278 1.061-0.278 1.54 0l7.348 4.318c1.162 0.681 2.55-0.354 2.247-1.667l-1.97-8.181c-0.126-0.556 0.051-1.111 0.48-1.49l6.641-5.833c0.96-0.884 0.404-2.525-0.909-2.651z"></path>
              </svg>
            )}
          </button>
        </div>
      ) : (
        <div className={styles.challenge_container}>
          <div
            className={
              type === "challenge" ? styles.challenge_top : styles.card_top_edit
            }
          >
            <div className={`${styles.card_row} ${styles.pointer_off}`}>
              <div
                className={
                  level === "Normal"
                    ? styles.card_circle_green
                    : level === "Easy"
                    ? styles.card_circle_blue
                    : styles.card_circle_red
                }
              ></div>
              <p className={styles.card_text}>{level}</p>
            </div>
            <button
              className={
                isDone
                  ? `${styles.card_button} ${styles.pointer_off}`
                  : styles.card_button
              }
              onClick={!isDone ? endQuest : null}
              type="button"
            >
              {type === "challenge" ? (
                <Trophy />
              ) : (
                <svg
                  className={styles.star_icon}
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30.608 11.163l-8.812-0.833c-0.556-0.050-1.036-0.404-1.263-0.934l-3.156-7.651c-0.505-1.263-2.298-1.263-2.803 0l-3.131 7.651c-0.202 0.53-0.707 0.884-1.263 0.934l-8.813 0.833c-1.313 0.126-1.843 1.768-0.859 2.651l6.641 5.833c0.429 0.379 0.606 0.934 0.48 1.49l-1.995 8.181c-0.303 1.288 1.086 2.348 2.247 1.667l7.348-4.318c0.48-0.278 1.061-0.278 1.54 0l7.348 4.318c1.162 0.681 2.55-0.354 2.247-1.667l-1.97-8.181c-0.126-0.556 0.051-1.111 0.48-1.49l6.641-5.833c0.96-0.884 0.404-2.525-0.909-2.651z"></path>
                </svg>
              )}
            </button>
          </div>
          {type === "challenge" ? (
            <p className={styles.cardType}>CHALLENGE</p>
          ) : null}
        </div>
      )}
    </>
  );
};

export { Level };
