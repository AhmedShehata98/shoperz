import PaymentStatusbar from "@/components/PaymentStatusbar";

import Head from "next/head";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import CheckoutComponent from "./components/CheckoutComponent";
import OrderCompleteComponent from "./components/OrderCompleteComponent";
import ShoppingCartComponent from "./components/ShoppingCartComponent";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectAppState } from "@/redux/slices/app.slice";
import { useDispatch } from "react-redux";

const getFakeProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return await res.json();
};

function ShoppingCart() {
  const appState = useAppSelector(selectAppState);
  const router = useRouter();
  const [fakeProd, setFakeProd] = useState<any>([]);

  useEffect(() => {
    getFakeProducts().then((res) => {
      let randomQuantity = Math.floor(Math.random() * 3);
      let fakProd = res.products.slice(5, 9).map((prev: any) => ({
        ...prev,
        quantity: randomQuantity,
        currency: "L.E",
        totalPrice: prev.price * randomQuantity,
      }));

      setFakeProd(fakProd);
    });
  }, []);

  console.log("from order", appState.orderData);

  return (
    <>
      <Head>
        <title>
          {router.pathname
            .split("/")
            .join("")
            .split("-")
            .join(" ")
            .toLocaleUpperCase()}
        </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-start flex-col">
        <PaymentStatusbar currentPage={appState.currentComponent} />
        {appState.currentComponent === "shopping-cart" && (
          <ShoppingCartComponent cartItems={fakeProd} />
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
