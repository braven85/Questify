import React, { useEffect } from "react";
import { CardQuest } from "../../components/Cards/CardQuest";
import styles from "./TomorrowContainer.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllCards } from "../../services/api";

const TomorrowContainer = () => {
  const { cardsList } = useSelector((state) => state.cards);
  const { accessToken } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const date = new Date();
  const tomorrow = date.setDate(new Date(date).getDate() + 1);
  const dayOfMonth = new Date(tomorrow).getDate();
  let dayOfMonthWithZero = 0;
  let tomorrowCards = [];
  let sortedByDate;
  let errorMessage;

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  if (dayOfMonth >= 1 && dayOfMonth <= 9) {
    dayOfMonthWithZero = "0" + dayOfMonth;
  } else if (dayOfMonth >= 10 && dayOfMonth <= 31) {
    dayOfMonthWithZero = dayOfMonth;
  }

  if (cardsList === null) {
    return;
  } else {
    for (let card of cardsList.cards) {
      if (
        card.type === "quest" &&
        card.date.slice(8) === dayOfMonthWithZero.toString() &&
        card.isCompleted === false
      ) {
        tomorrowCards.push(card);
      }
    }
  }

  const sortedCards = () => {
    sortedByDate = tomorrowCards.sort(function (a, b) {
      return (
        new Date(`${a.date} ${a.time}:00`).getTime() -
        new Date(`${b.date} ${b.time}:00`).getTime()
      );
    });
  };

  sortedCards();

  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Tomorrow</h1>
      <div className={styles.cart_container}>
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
                  <CardQuest
                    cardId={_id}
                    cardTitle={title}
                    cardDifficulty={difficulty}
                    cardCategory={category}
                    cardDate={date}
                    cardTime={time}
                    cardType={type}
                    owner={owner}
                  />
                </li>
              )
            )}
          </ul>
        ) : (
          <h2>{errorMessage}</h2>
        )}
      </div>
    </div>
  );
};

export default TomorrowContainer;
