import React from "react";
import styles from "./Backdrop.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Backdrop = ({ children, toggle }) => {
  return (
    <AnimatePresence>
      {toggle ? (
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className={styles.backdrop}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export { Backdrop };
