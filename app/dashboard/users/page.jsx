import styles from "./../../ui/users/users.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import { fetchdata } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Userpage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { users, count } = await fetchdata(q, page);

  console.log(users);
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={user.img || "/noavatar.png"}
                    alt="s"
                    width={50}
                    height={50}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button type="submit" className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Userpage;
