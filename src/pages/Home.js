import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome!</h1>
      <p>
        I am studying JavaScript Development at{" "}
        <a href="https://www.iths.se" target="_blank"  rel="noreferrer" className={styles.iths}>
          IT-Högskolan
        </a>{" "}
        in Stockholm and this is my attempt at creating a portfolio using React to show my course projects.
      </p>
    </div>
  );
};

export default Home;
