import Rightbar from "../ui/dashboard/Rightbar/Rightbar";
import Card from "../ui/dashboard/card/Card";
import Transaction from "../ui/dashboard/transactions/Transaction";
import styles from "./../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/Chart";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
