import styles from "./../../ui/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Productspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src="/noproduct.jpg"
                  alt="s"
                  width={50}
                  height={50}
                />
             Iphone
              </div>
            </td>
            <td>$999.99</td>
            <td>13.01.2024!</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href="/">
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




export default Productspage