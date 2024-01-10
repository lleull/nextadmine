import { User, Product } from "./modals";
import { connectToDB } from "./utils";

export const fetchdata = async (q, page) => {


  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return {users, count};
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch data from Mongo");
  }
};
export const fetchproduct = async (q, page) => {


  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return {products, count};
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch data from Mongo");
  }
};
