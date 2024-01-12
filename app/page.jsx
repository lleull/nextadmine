import Dashboard from "./dashboard/page";
import styles from "./main.css";
const Homepage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.secondmain}>
        <h1 className={styles.head}>Dashboard</h1>
        <button className={styles.btn}>Log In</button>
      </div>
    </div>
  );
};

export default Homepage;
