import React, { useEffect } from "react";
import styles from "./TodayContainer.module.css";
import { CardQuest } from "../../components/Cards/CardQuest";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteCard, getAllCards } from "../../services/api";
import Challange from "../../components/Cards/Challange/Challange";

const TodayContainer = () => {
  const { accessToken } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { cardsList } = useSelector((state) => state.cards);
  const { error } = useSelector((state) => state.cards);
  const date = new Date();
  const today = date.setDate(new Date(date).getDate());
  const dayOfMonth = new Date(today).getDate();
  let dayOfMonthWithZero = 0;
  let todayCards = [];
  let sortedByDate;

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  let errorMessage;

  if (error) {
    errorMessage = error;
  }

  if (!error && cardsList !== null && !cardsList.hasOwnProperty("status")) {
    errorMessage = "No cards in database";
  }

  if (dayOfMonth >= 1 && dayOfMonth <= 9) {
    dayOfMonthWithZero = "0" + dayOfMonth;
  } else if (dayOfMonth >= 10 && dayOfMonth <= 31) {
    dayOfMonthWithZero = dayOfMonth;
  }

  if (cardsList === null) {
    void 0;
  } else {
    for (let card of cardsList.cards) {
      let cardId = card._id;
      if (new Date(`${card.date} 23:59:59`) < date) {
        dispatch(deleteCard({ accessToken, cardId }));
      }

      if (card.type === "challenge" && card.isCompleted === false) {
        todayCards.push(card);
      } else if (
        card.type === "quest" &&
        card.date.slice(8) === dayOfMonthWithZero.toString() &&
        card.isCompleted === false
      ) {
        todayCards.push(card);
      }
    }
  }

  const sortedCards = () => {
    sortedByDate = todayCards
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
    <div className={styles.container}>
      <h1 className={styles.title_container}>Today</h1>
      <div className={styles.cart_container}>
        {cardsList !== null &&
        cardsList.cards.length > 0 &&
        !cardsList.status ? (
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
    </div>
  );
};

export default TodayContainer;
