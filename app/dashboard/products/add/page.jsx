import styles from "./../../../ui/products//Addproduct/addproduct.module.css";
import { newProduct } from "@/app/lib/actions";


const Addproducts = () => {
  return (
    <div className={styles.container}>
      <form action={newProduct} className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea name="desc" id="desc"  rows="16"></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    
    </div>
  );
};

export default Addproducts;
