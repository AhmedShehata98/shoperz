import { createSlice, Action } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";
import { ICreditCard } from "@/models/shopperz.model";

interface AppStateProps {
  paymentStatusbarState: "shopping-cart" | "checkout" | "order-complete";
  showCartDrawer: boolean;
  selectedAddressId: string | undefined;
  creditCardsList: ICreditCard[];
  cartLength: number;
  isLoggedIn: boolean;
  shoppingCart: { _id: string }[] | [];
  order: Order | undefined;
  clientSecret: string | undefined;
}

const initialState: AppStateProps = {
  paymentStatusbarState: "shopping-cart",
  cartLength: 0,
  showCartDrawer: false,
  isLoggedIn: false,
  selectedAddressId: undefined,
  creditCardsList: [],
  shoppingCart: [],
  order: undefined,
  clientSecret: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCreditCardsList: (state, action) => {
      let newCreditCardsList = state.creditCardsList.map((card) => ({
        ...card,
        isCurrent: false,
      }));
      state.creditCardsList = [...newCreditCardsList, action.payload];
    },
    removeFromCreditCardsList: (state, action) => {
      let listAfterRemove = state.creditCardsList.filter(
        (cdt) => cdt["card-number"] !== action.payload.cardNumber
      );
      if (listAfterRemove.length > 1) {
        listAfterRemove[listAfterRemove.length - 1].isCurrent = true;
      }
      if (listAfterRemove.length === 0) {
        listAfterRemove[0].isCurrent = true;
      }

      state.creditCardsList = listAfterRemove;
    },
    setShowCartDrawer: (state, action) => {
      state.showCartDrawer = action.payload;
    },
    setCartLength: (state, action) => {
      state.cartLength = action.payload;
    },
    setShoppingCart: (state, action) => {
      let cart = action.payload.cart as [];
      state.shoppingCart = [...cart];
      state.cartLength = action.payload.cart?.length;
    },
    removeFromShoppingCart: (state, action) => {
      const newShoppingCart = state.shoppingCart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.shoppingCart = newShoppingCart;
      state.cartLength = newShoppingCart.length;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setPaymentStatusbarState: (state, action) => {
      state.paymentStatusbarState = action.payload.currentState;
    },
    setClientSecret: (state, action) => {
      state.clientSecret = action.payload.clientSecret;
    },
    setOrder: (state, action) => {
      state.order = action.payload.order;
    },
    setAddressId: (state, action) => {
      state.selectedAddressId = action.payload.addressId;
    },
  },
});

export const selectAppState = (state: AppState) => state.app;
export const {
  setIsLoggedIn,
  setAddressId,
  addToCreditCardsList,
  removeFromCreditCardsList,
  setShowCartDrawer,
  setCartLength,
  setShoppingCart,
  removeFromShoppingCart,
  setPaymentStatusbarState,
  setClientSecret,
  setOrder,
} = appSlice.actions;
