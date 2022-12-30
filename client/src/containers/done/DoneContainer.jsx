import React, { useState, useEffect } from "react";
import { CardQuest } from "../../components/Cards/CardQuest";
import styles from "./DoneContainer.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllCards } from "../../services/api";
import Challange from "../../components/Cards/Challange/Challange";

const DoneContainer = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const { cardsList } = useSelector((state) => state.cards);
  const { accessToken } = useSelector((state) => state.users);
  let doneCards = [];
  let sortedByDate;
  let errorMessage;

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  const handleClick = () => {
    setIsActive(!isActive);
    setShow(!show);
  };

  if (cardsList === null) {
    return;
  } else {
    for (let card of cardsList.cards) {
      if (card.isCompleted === true) {
        doneCards.push(card);
      }
    }
  }

  const sortedCards = () => {
    sortedByDate = doneCards
      .sort(function (a, b) {
        return (
          new Date(`${a.date} ${a.time}:00`).getTime() -
          new Date(`${b.date} ${b.time}:00`).getTime()
        );
      })
      .sort(function (a, b) {
        return a.type.length - b.type.length;
      });
  };

  sortedCards();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.border_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Done</h1>
          </div>

          <span
            className={isActive ? [styles.activ_button] : [styles.button]}
            onClick={handleClick}
          ></span>
          <div className={styles.line}></div>
        </div>
        {show && (
          <div className={styles.card_container}>
            {cardsList ? (
              <ul className={styles.list}>
                {sortedByDate.map(
                  ({
                    _id,
                    title,
                    difficulty,
                    category,
                    date,
                    time,
                    type,
                    owner,
                  }) => (
                    <li key={_id}>
                      {type === "challenge" ? (
                        <Challange
                          cardId={_id}
                          cardTitle={title}
                          cardDifficulty={difficulty}
                          cardCategory={category}
                          cardDate={date}
                          cardTime={time}
                          cardType={type}
                          owner={owner}
                          isDone={true}
                        />
                      ) : (
                        <CardQuest
                          cardId={_id}
                          cardTitle={title}
                          cardDifficulty={difficulty}
                          cardCategory={category}
                          cardDate={date}
                          cardTime={time}
                          cardType={type}
                          owner={owner}
                          isDone={true}
                        />
                      )}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <h2>{errorMessage}</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DoneContainer;
