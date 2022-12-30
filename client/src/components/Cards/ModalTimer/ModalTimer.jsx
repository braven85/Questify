import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import styles from "./ModalTimer.module.css";

const ModalTimer = ({ onClose, setTime, cardType }) => {
  return (
    <div className={styles.modal}>
      <Flatpickr
        className={styles.input}
        options={
          cardType === "quest"
            ? {
                enableTime: true,
                minDate: new Date(),
                maxDate: new Date().fp_incr(1),
                disableMobile: true,
              }
            : {
                enableTime: true,
                minDate: new Date(),
                maxDate: new Date().fp_incr(6),
                disableMobile: true,
              }
        }
        onChange={(date) => setTime(date)}
        onClose={onClose}
      />
    </div>
  );
};

export { ModalTimer };
