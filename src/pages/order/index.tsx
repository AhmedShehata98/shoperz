import PaymentStatusbar from "@/components/PaymentStatusbar";

import Head from "next/head";
import React from "react";
import CheckoutComponent from "./components/CheckoutComponent";
import OrderCompleteComponent from "./components/OrderCompleteComponent";
import ShoppingCartComponent from "./components/ShoppingCartComponent";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectAppState } from "@/redux/slices/app.slice";
import { useDispatch } from "react-redux";

function ShoppingCart() {
  const appState = useAppSelector(selectAppState);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>order</title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-start flex-col">
        <PaymentStatusbar currentPage={appState.currentComponent} />
        {appState.currentComponent === "shopping-cart" && (
          <ShoppingCartComponent />
        )}
        {appState.currentComponent === "checkout" && <CheckoutComponent />}
        {appState.currentComponent === "order-complete" && (
          <OrderCompleteComponent />
        )}
      </main>
    </>
  );
}

export default React.memo(ShoppingCart);
