"use client";
// import { useState } from "react";
import styles from "./loginfrom.module.css";
import { authenticate } from "@/app/lib/actions";


const LoginForm = () => {
  // const [err, seterr] = useState('')
  // const formaction = async(formData) => {
  //  const data =  await authenticate(formData)
  //  data.error.length > 0 && seterr(data.error)
  // }
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input value="bereket" type="text" name="username" required placeholder="username" />
        <input value="12" type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
        {/* <p className={styles.error}>{err && err}</p> */}
      </form>
    </div>
  );
};

export default LoginForm;
