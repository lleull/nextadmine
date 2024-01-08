import styles from "./transaction.module.css";
import Image from "next/image"
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transacations</h2>
      <table className={styles.tabel}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="asd"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.04.2024</td>
            <td>$320</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="asd"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
            <span className={`${styles.status} ${styles.cancelled}`}>
              Cancelled
              </span>
            </td>
            <td>12.04.2024</td>
            <td>$320</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="asd"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
            <span className={`${styles.status} ${styles.done}`}>
              Done
              </span>
            </td>
            <td>12.04.2024</td>
            <td>$320</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="asd"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
            <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.04.2024</td>
            <td>$320</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
