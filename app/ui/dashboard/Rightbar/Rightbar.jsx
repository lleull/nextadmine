import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="asd" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 3 min to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ut
            laudantium error cumque exercitationem consequuntur quos vero
            molestiae aliquam tempore voluptas nam ducimus distinctio laborum
            fuga, quaerat repellendus unde voluptatem!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
       
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Comming soon</span>
          <h3 className={styles.title}>New server actions are available, partials pre-rendering is Coming up!</h3>
          <span className={styles.subtitle}>Boosts your Productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ut
            laudantium error cumque exercitationem consequuntur quos vero
            molestiae aliquam tempore voluptas nam ducimus distinctio laborum
            fuga, quaerat repellendus unde voluptatem!
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
