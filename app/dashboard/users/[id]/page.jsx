import styles from "./../../../ui/users/singleuser/singleuser.module.css";
import Image from "next/image";
import { fetchSingleuser } from "@/app/lib/actions";
import { updateUser } from "@/app/lib/actions";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleuser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="s" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input placeholder={user.username} type="text" name="username" />
          <label>Email</label>
          <input placeholder={user.email} type="email" name="email" />
          <label>Password</label>
          <input
            placeholder={user.password}
            type="password"
            name="password"
          />
          <label>Phone</label>
          <input placeholder={user.phone} type="text" name="phone" />
          <label>Address</label>
          <textarea
            placeholder={user.address}
            type="text"
            name="address"
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
