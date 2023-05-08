import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import PaymentStatusbar from "@/components/PaymentStatusbar";

export const metadata: Metadata = {
  title: "Checkout",
  description: "checkout page to check out your orders and payments",
};

export default function Checkout() {
  return (
    <>
      <Head>
        <title>checkout</title>
      </Head>
      <main className="min-h-screen">
        <PaymentStatusbar currentPage="checkout" />
      </main>
    </>
  );
}
