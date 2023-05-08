import PaymentStatusbar from "@/components/PaymentStatusbar";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
import Cart from "./components/Cart";
import OrderReport from "./components/OrderReport";

function ShoppingCart() {
  const cartItemsList = [
    {
      image: "https://picsum.photos/300",
      productName: "kal;skdnvr iojfwioehf lhygf",
      quantity: 3,
      price: 400,
      currency: "EGP",
    },
    {
      image: "https://picsum.photos/301",
      productName: "call be doing some is herfs",
      quantity: 1,
      price: 200,
      currency: "EGP",
    },
    {
      image: "https://picsum.photos/302",
      productName: "qwc ougbvrm aafecwdasdfrefvs dcs",
      quantity: 4,
      price: 1400,
      currency: "EGP",
    },
    {
      image: "https://picsum.photos/303",
      productName: "gft asdvnbmke yugf",
      quantity: 2,
      price: 2800,
      currency: "EGP",
    },
  ];
  return (
    <>
      <Head>
        <title>shopping cart</title>
      </Head>
      <main className="min-h-screen">
        <PaymentStatusbar currentPage="Shopping Cart" />
        <section className="min-h-screen container max-w-5xl mx-auto flex items-start justify-between gap-3">
          <Cart
            cartItems={[
              {
                image: "https://picsum.photos/300",
                productName: "kal;skdnvr iojfwioehf lhygf",
                quantity: 3,
                price: 400,
                currency: "EGP",
              },
              {
                image: "https://picsum.photos/301",
                productName: "call be doing some is herfs",
                quantity: 1,
                price: 200,
                currency: "EGP",
              },
              {
                image: "https://picsum.photos/302",
                productName: "qwc ougbvrm aafecwdasdfrefvs dcs",
                quantity: 4,
                price: 1400,
                currency: "EGP",
              },
              {
                image: "https://picsum.photos/303",
                productName: "gft asdvnbmke yugf",
                quantity: 2,
                price: 2800,
                currency: "EGP",
              },
            ]}
          />
          <OrderReport orders={cartItemsList} />
        </section>
      </main>
    </>
  );
}

export default ShoppingCart;
