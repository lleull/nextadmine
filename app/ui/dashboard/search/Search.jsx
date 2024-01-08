"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        required
      />
    </div>
  );
};

export default Search;
