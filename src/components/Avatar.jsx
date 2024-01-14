import { faker } from "@faker-js/faker";
import styles from "./Avatar.module.css";

function Avatar({ avatar }) {
  return (
    <a href="/">
      <img className={styles.avatar} src={avatar} alt="avatar" />
    </a>
  );
}

export default Avatar;
