import { createSlice, Action } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";
import { ICreditCard } from "@/models/shopperz.model";

interface AppStateProps {
  currentComponent: "shopping-cart" | "checkout" | "order-complete";
  showCartDrawer: boolean;
  paymentMethod: IPaymentMethod[];
  creditCardsList: ICreditCard[];
  cartLength: number;
  isLoggedIn: boolean;
}

const initialState: AppStateProps = {
  currentComponent: "shopping-cart",
  cartLength: 0,
  showCartDrawer: false,
  isLoggedIn: false,
  paymentMethod: [
    {
      id: "credit-card",
      value: true,
      paymentData: {},
    },
    {
      id: "upon-receipt",
      value: false,
      paymentData: {},
    },
  ],
  creditCardsList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeCurrentOrderComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
    selectPatmentMethod: (state, action) => {
      let newPaymentMethod = state.paymentMethod.map((method) =>
        method.id === action.payload
          ? { ...method, value: !method.value }
          : { ...method, value: false }
      );
      state.paymentMethod = newPaymentMethod;
    },
    addPaymentData: (state, action) => {
      let newPaymentData = state.paymentMethod.map((data) =>
        data.id === action.payload.id
          ? { ...data, paymentData: action.payload.paymentData }
          : { ...data }
      );
      state.paymentMethod = newPaymentData;
    },
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
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const selectAppState = (state: AppState) => state.app;
export const {
  changeCurrentOrderComponent,
  setIsLoggedIn,
  addPaymentData,
  selectPatmentMethod,
  addToCreditCardsList,
  removeFromCreditCardsList,
  setShowCartDrawer,
  setCartLength,
} = appSlice.actions;
