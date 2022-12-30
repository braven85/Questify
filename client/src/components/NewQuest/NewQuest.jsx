import React, { useState } from "react";
import styles from "./NewQuest.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { createCard } from "../../services/api";
import { useDispatch, useSelector } from "react-redux/es/exports";

const NewQuest = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.users);

  const handleClick = () => {
    setShow(!show);
  };

  const currentLocalDate = () => {
    return new Date().toISOString().slice(0, 10);
  };

  const currentLocalHour = () => {
    return new Date().toTimeString().split(" ")[0].slice(0, 5);
  };

  const addQuest = () => {
    const cardData = {
      title: "Enter quest title",
      difficulty: "Easy",
      category: "STUFF",
      date: currentLocalDate(),
      time: currentLocalHour(),
      type: "quest",
    };

    dispatch(createCard({ accessToken, cardData }));
  };

  const addChallenge = () => {
    const cardData = {
      title: "Enter challenge title",
      difficulty: "Easy",
      category: "STUFF",
      date: currentLocalDate(),
      time: currentLocalHour(),
      type: "challenge",
    };

    dispatch(createCard({ accessToken, cardData }));
  };

  return (
    <div className={styles.buttons}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              y: 52,
              opacity: 0,
            }}
            animate={{
              y: 37,
              transition: { duration: 0.5, delay: 0.1 },
              opacity: 1,
            }}
            exit={{
              y: 52,
              opacity: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            <button
              type="button"
              className={styles.buttonChallenge}
              onClick={addChallenge}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#242a37"
                  d="M23.029 9.611h-1.916c0.007-0.212 0.011-0.426 0.011-0.64 0-0.242-0.196-0.438-0.437-0.438h-9.372c-0.242 0-0.437 0.196-0.437 0.438 0 0.215 0.004 0.428 0.011 0.64h-1.916c-0.242 0-0.438 0.196-0.438 0.438 0 1.96 0.512 3.81 1.443 5.208 0.92 1.382 2.144 2.175 3.468 2.252 0.3 0.326 0.617 0.593 0.947 0.796v1.945h-0.734c-0.887 0-1.609 0.722-1.609 1.609v0.734h-0.031c-0.242 0-0.438 0.196-0.438 0.437s0.196 0.438 0.438 0.438h7.966c0.242 0 0.438-0.196 0.438-0.438s-0.196-0.437-0.438-0.437h-0.031v-0.734c0-0.887-0.722-1.609-1.609-1.609h-0.734v-1.945c0.33-0.203 0.647-0.469 0.947-0.796 1.323-0.077 2.548-0.87 3.468-2.252 0.93-1.398 1.443-3.248 1.443-5.208 0-0.242-0.196-0.438-0.438-0.438zM10.704 14.772c-0.767-1.153-1.218-2.661-1.287-4.286h1.518c0.158 1.997 0.627 3.842 1.359 5.308 0.117 0.233 0.239 0.454 0.365 0.661-0.728-0.275-1.401-0.849-1.956-1.683zM21.296 14.772c-0.555 0.834-1.228 1.408-1.956 1.683 0.127-0.208 0.249-0.428 0.365-0.661 0.733-1.465 1.201-3.311 1.359-5.308h1.518c-0.069 1.624-0.519 3.133-1.287 4.286z"
                ></path>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              y: 52,
              x: -52,
              opacity: 0,
            }}
            animate={{
              y: 52,
              x: -70,
              transition: { duration: 0.5, delay: 0.1 },
              opacity: 1,
            }}
            exit={{
              y: 52,
              x: -52,
              opacity: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            <button
              type="button"
              className={styles.buttonQuest}
              onClick={addQuest}
            >
              <svg
                className={styles.quest_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#00d7ff"
                  d="M30.608 11.163l-8.812-0.833c-0.556-0.050-1.036-0.404-1.263-0.934l-3.156-7.651c-0.505-1.263-2.298-1.263-2.803 0l-3.131 7.651c-0.202 0.53-0.707 0.884-1.263 0.934l-8.813 0.833c-1.313 0.126-1.843 1.768-0.859 2.651l6.641 5.833c0.429 0.379 0.606 0.934 0.48 1.49l-1.995 8.181c-0.303 1.288 1.086 2.348 2.247 1.667l7.348-4.318c0.48-0.278 1.061-0.278 1.54 0l7.348 4.318c1.162 0.681 2.55-0.354 2.247-1.667l-1.97-8.181c-0.126-0.556 0.051-1.111 0.48-1.49l6.641-5.833c0.96-0.884 0.404-2.525-0.909-2.651z"
                ></path>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button type="button" className={styles.button} onClick={handleClick}>
        <svg
          className={styles.plus_icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#fff"
            d="M2.32 14.48h12.16v-12.16c0-0.839 0.681-1.52 1.52-1.52s1.52 0.681 1.52 1.52v12.16h12.16c0.839 0 1.52 0.681 1.52 1.52s-0.681 1.52-1.52 1.52h-12.16v12.16c0 0.839-0.681 1.52-1.52 1.52s-1.52-0.681-1.52-1.52v-12.16h-12.16c-0.839 0-1.52-0.681-1.52-1.52s0.681-1.52 1.52-1.52z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default NewQuest;
