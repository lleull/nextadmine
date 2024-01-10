
import styles from "./../ui/login/login.module.css"
const login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input type="text" name="username" required placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default login