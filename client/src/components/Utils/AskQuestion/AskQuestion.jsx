import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../../services/api";
import styles from "./AskQuestion.module.css";

const AskQuestion = ({ question, onCancel, cardId }) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.users);
  return (
    <div className={styles.bg}>
      <p className={styles.question}>{question}</p>
      <div className={styles.row}>
        <button
          className={styles.cancel}
          type="button"
          value="CANCEL"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <div className={styles.wall}></div>
        <button
          className={styles.delete}
          type="button"
          value="DELETE"
          onClick={() => dispatch(deleteCard({ accessToken, cardId }))}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export { AskQuestion };
