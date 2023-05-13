import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppStore } from "../store";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";

interface AppStateProps {
  currentComponent: "shopping-cart" | "checkout" | "order-complete";
  orderData: SinglyLinkedList;
  cart: Array<{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    totalPrice: number;
    currency: string;
    quantity: number;
    images: Array<string>;
  }>;
}

const initialState: AppStateProps = {
  currentComponent: "shopping-cart",
  orderData: new SinglyLinkedList(),
  cart: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeCurrentOrderComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
    handleAddToOrderData: (state, action) => {
      state.orderData.push(action.payload);
    },
    handleUpdateOrderData: (state, action) => {
      state.orderData.update(action.payload.oldData, action.payload.newData);
    },
    handleGetOrderDataById: (state, action) => {
      state.orderData.getById(action.payload);
    },
    handleMargefullOrderData: (state, action) => {
      let data = state.orderData.margeAllData();

      if (data) {
        state.orderData.push({ ...data, id: action.payload });
      }
    },
    addCartItems: (state, action) => {
      state.cart.push(...action.payload);
    },
  },
});

export const selectAppState = (state: AppState) => state.app;
export const {
  changeCurrentOrderComponent,
  handleAddToOrderData,
  handleUpdateOrderData,
  handleGetOrderDataById,
  handleMargefullOrderData,
  addCartItems,
} = appSlice.actions;
