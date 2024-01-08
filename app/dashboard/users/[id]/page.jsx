import styles from "./../../../ui/users/singleuser/singleuser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src= "/noavatar.png" alt="s" fill />
      </div>
      Leul Mekonnen
    </div>
    <div className={styles.formContainer}>
      <form  className={styles.form}>
        <input type="hidden" name="id" value="id"/>
        <label>Username</label>
        <input type="text" name="username" placeholder="username" />
        <label>Email</label>
        <input type="email" name="email" placeholder="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="phone" />
        <label>Address</label>
        <textarea type="text" name="address" placeholder="address" />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true} defaultValue="isAdmin">Yes</option>
          <option value={false} defaultValue="isAdmin">No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true} defaultValue="isActive">Yes</option>
          <option value={false} defaultValue="isActive">No</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}

export default SingleUserPage