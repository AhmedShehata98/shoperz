import axios from "axios";

export const API_BASE_URL = "https://shoperz-api.vercel.app/";
// export const API_BASE_URL = "http://localhost:3000/";
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
  users: {
    changePassword: "users/change-password",
    myData: "/users/me",
  },
};

export const sendSignupData = async (body: any) => {
  try {
    const { data } = await axios({
      baseURL: API_BASE_URL,
      url: ENDPOINTS.auth.signup,
      method: "POST",
      headers: {
        "Content-Type": "application/json ;charset=UTF-8",
      },
      data: body,
    });

    return await data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
