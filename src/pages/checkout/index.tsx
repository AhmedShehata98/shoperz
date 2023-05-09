import React from "react";
import Head from "next/head";
import PaymentStatusbar from "@/components/PaymentStatusbar";
import UserAddressForm from "./components/UserAddressForm";
import FinalOrderReport from "./components/FinalOrderReport";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>checkout</title>
      </Head>
      <main className="min-h-screen">
        <PaymentStatusbar currentPage="checkout" />
        <section className="container max-w-5xl mx-auto flex max-lg:flex-col items-start justify-start gap-3 max-lg:px-3">
          <div className="w-full lg:w-auto flex flex-col pt-5">
            <header className="w-full py-6 flex items-center justify-between border-b-2 border-Grey-400">
              <h3 className="capitalize font-semibold text-xl">shipping</h3>
              <p className="text-gray-500">(4)</p>
            </header>
            <UserAddressForm />
          </div>
          <FinalOrderReport />
        </section>
      </main>
    </>
  );
}
