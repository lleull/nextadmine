import styles from "./../../ui/users/users.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Userpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created by</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="s"
                  width={50}
                  height={50}
                />
                Leul Mekonnen
              </div>
            </td>
            <td>Leul@gmail.com</td>
            <td>13.01.2024!</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href="/dashboard/users/id">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>

            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default Userpage;
