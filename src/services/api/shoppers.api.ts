import axios from "axios";

export const API_BASE_URL = "https://shoperz.vercel.app/";
export const ENDPOINTS = {
  products: "products",
  cart: "cart",
  categories: {
    category: "categories",
  },
  upload: "upload/product",
  auth: {
    signup: "auth/signup",
    login: "auth/login",
    resetPassword: "auth/resetpassword",
    verifyEmail: "auth/send-verify-email",
  },
};
