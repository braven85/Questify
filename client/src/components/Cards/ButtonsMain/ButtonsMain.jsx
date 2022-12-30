import React from "react";
import styles from "./ButtonsMain.module.css";

const ButtonsMain = ({
  createMode,
  updateMode,
  onCreate,
  onDelete,
  onAccept,
}) => {
  return (
    <>
      {createMode ? (
        <div className={styles.card_buttons}>
          <button
            type="button"
            className={styles.card_clear}
            onClick={onDelete}
          >
            <svg
              className={styles.clear_icon}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
            </svg>
          </button>
          <div className={styles.card_wall}></div>
          <button
            className={styles.card_create}
            onClick={onCreate}
            type="button"
          >
            CREATE
          </button>
        </div>
      ) : null}
      {updateMode ? (
        <div className={styles.card_buttons}>
          <button type="button" className={styles.card_save} onClick={onCreate}>
            <svg
              className={styles.save_icon}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24.889 0h-21.333c-1.973 0-3.556 1.6-3.556 3.556v24.889c0 1.956 1.582 3.556 3.556 3.556h24.889c1.956 0 3.556-1.6 3.556-3.556v-21.333l-7.111-7.111zM28.444 28.444h-24.889v-24.889h19.858l5.031 5.031v19.858zM16 16c-2.951 0-5.333 2.382-5.333 5.333s2.382 5.333 5.333 5.333 5.333-2.382 5.333-5.333c0-2.951-2.382-5.333-5.333-5.333zM5.333 5.333h16v7.111h-16v-7.111z"></path>
            </svg>
          </button>
          <div className={styles.card_wall}></div>
          <button
            type="button"
            className={styles.card_clear}
            onClick={onDelete}
          >
            <svg
              className={styles.clear_icon}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
            </svg>
          </button>
          <div className={styles.card_wall}></div>
          <button
            className={styles.card_accept}
            onClick={onAccept}
            type="button"
          >
            <svg
              className={styles.accept_icon}
              viewBox="0 0 45 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.255 25.313l-10.691-10.030-3.564 3.343 14.255 13.373 30.545-28.657-3.564-3.343-26.982 25.313z"></path>
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
};

export { ButtonsMain };
