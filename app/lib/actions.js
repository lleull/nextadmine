"use server";
import { Product, User } from "./modals";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { signIn, signOut } from "./../auth";
import bcrypt from "bcrypt";
import { redirects } from "@/next.config";
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await new bcrypt.hash(password, salt);

  try {
    connectToDB();
    const newUser = new User({
      username: username,
      email: email,
      password: hashedpassword,
      phone: phone,
      address: address,
      isAdmin: isAdmin,
      isActive: isActive,
    });
    await newUser.save();
  } catch (error) {
    throw new Error("Error when adding a new User");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const newProduct = async (formData) => {
  const { title, desc, color, size, price, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    newProduct.save();
  } catch (error) {
    throw new Error("Error when adding a new product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//SinglewithID
export const fetchSingleuser = async (id) => {
  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch data from Mongo");
  }
};
export const fetchSingleproducts = async (id) => {
  try {
    connectToDB();

    const products = await Product.findById(id);
    return products;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch data from Mongo");
  }
};
//Update
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  // const salt = await bcrypt.genSalt(10);

  try {
    connectToDB();
    const updatefield = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updatefield).forEach(
      (key) => (updatefield[key] === "" || undefined) && delete updatefield[key]
    );
    await User.findByIdAndUpdate(id, updatefield);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/products");
};
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  const updatefield = {
    title,
    desc,
    price,
    stock,
    color,
    size,
  };

  // const salt = await bcrypt.genSalt(10);

  try {
    connectToDB();
    Object.keys(updatefield).forEach(
      (key) => (updatefield[key] === "" || undefined) && delete updatefield[key]
    );
    await Product.findByIdAndUpdate(id, updatefield);
  } catch (error) {
    throw new Error("Error while updating a product");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//delete
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Error while deleting this Product!");
  }
  revalidatePath("/dashboard/products");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Error while deleting this Product!");
  }
  revalidatePath("/dashboard/users");
};

export const logoutuser = async () => {
  try {
    await signOut();
  } catch (error) {
    throw new Error("Error while Logging Out");
  }
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return { error: "Wrong Credentials!" };
  }
};
