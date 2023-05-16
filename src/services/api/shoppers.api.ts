import axios from "axios";

export const API_BASE_URL = "https://dummyjson.com/";
export const ENDPOINTS = {
  products: "products",
  cart: "cart",
  whishlist: "whishlist",
  categories: "categories",
  user: "user",
  login: "login",
  signup: "signup",
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}${ENDPOINTS.products}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
