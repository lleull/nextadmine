import styles from "./../../../ui/products/singleproduct/singleproduct.module.css";
import Image from "next/image";
import { fetchSingleproducts } from "@/app/lib/actions";
import { updateProduct } from "@/app/lib/actions";
const SingleProductPage = async({params}) => {
  const {id} = params
  const product = await fetchSingleproducts(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="s" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
  
          <form action={updateProduct} className={styles.form}>
            <input type="hidden" name="id" value="id" />
            <label>Title</label>
            <input placeholder={product.title || ""} type="text" name="title"  />
            <label>Price</label>
            <input placeholder={product.price || ""}  type="number" name="price"  />
            <label>Stock</label>
            <input placeholder={product.stock || ""}  type="number" name="stock" />
            <label>Color</label>
            <input placeholder={product.color || ""}  type="text" name="color"  />
            <label>Size</label>
            <textarea placeholder={product.size || ""}  type="text" name="size" />
            <label>Cat</label>
            <select name="cat" id="cat">
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
            </select>
            <label>Description</label>
            <textarea
              name="desc"
              id="desc"
              rows="10"
              placeholder=".desc"
            ></textarea>
            <button>Update</button>
          </form>
      
      </div>
    </div>
  );
};

export default SingleProductPage;
