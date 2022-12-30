import styles from "./Landing.module.css";
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllUsers, loginUser, registerUser } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const LandingForm = () => {
  Notiflix.Notify.init({ timeout: 6000 });
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { accessToken } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const location = useLocation();
  const users = useSelector((state) => state.users.allUsers);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getAllUsers());
    if (error) {
      Notiflix.Notify.failure(error);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (accessToken) {
      const origin = location.state?.from?.pathname || "/main";
      return navigate(origin);
    }
  }, [accessToken, location.state?.from?.pathname, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (users.includes(enteredEmail)) {
      dispatch(
        loginUser({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
    } else {
      if (enteredPassword.length < 8) {
        Notiflix.Notify.failure("Password is to short. At least 8 characters!");
      } else {
        dispatch(
          registerUser({
            email: enteredEmail,
            password: enteredPassword,
          })
        );

        Notiflix.Notify.success(
          "You signed up. Log in to get to your own Questify!"
        );
      }
    }
  };

  return (
    <div className={styles.landingFormContainer}>
      <p className={styles.landingParagraphForm}>
        Write your email to sign up or log in
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.landingFormInput}
          type="email"
          placeholder="Email"
          ref={emailInputRef}
          required
        ></input>
        <input
          className={styles.landingFormInput}
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
          required
        ></input>

        <button className={styles.landingFormButton} type="submit">
          go!
        </button>
      </form>
    </div>
  );
};

export default LandingForm;
