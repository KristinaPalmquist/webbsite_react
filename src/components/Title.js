import styles from "./Title.module.css";
import logo from "../assets/logo.png";

export const Title = () => {
  return (

      <a href="/" className={styles.titleLink}>
        <div className={styles.title}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h1 className={styles.name}>Kristina Palmquist</h1>
        </div>{" "}
      </a>
  );
};
