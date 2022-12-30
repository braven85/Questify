import React from "react";
import Avatar from "react-avatar";
import styles from "./AvatarIcon.module.css";
import { useSelector } from "react-redux/es/exports";

const AvatarIcon = () => {
  const userEmail = useSelector((state) => state.users.userData.email);
  const name = userEmail.substring(0, userEmail.lastIndexOf("@"));

  return (
    <div className={styles.avatar}>
      <Avatar
        className={styles.avatar_icon}
        name={userEmail}
        round="50%"
        size="30"
        color="#3e4e6c"
        textSizeRatio={2}
      />
      <p className={styles.avatar_name}>{name}'s Quest Log</p>
    </div>
  );
};

export default AvatarIcon;
