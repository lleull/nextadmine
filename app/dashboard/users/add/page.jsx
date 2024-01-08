import styles from "./../../../ui/users/Addusers/adduser.module.css";

const Addusers = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" name="username" placeholder="username" required />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="number" placeholder="phone" name="phone" />
        <select name="isAdmin" id="IsAdmin">
          <option value={false} selected>isAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        
        </select>
        
        <select name="isActive" id="isActive">
          <option value={true} selected>isActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        
        </select>
        
        <textarea name="address" id="address" placeholder="Address" rows="16"></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addusers;
