import PaymentStatusbar from "@/components/PaymentStatusbar";
import Head from "next/head";
import React from "react";
import ProductCard from "./components/ProductCard";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";

const OrderComplete = () => {
  return (
    <>
      <Head>
        <title>Order Complete</title>
      </Head>
      <main className="min-h-screen">
        <PaymentStatusbar currentPage="order complete" />
        <section className="container max-w-5xl mx-auto flex flex-col items-start justify-start gap-3 max-lg:px-3">
          <span className="w-full flex justify-between items-center capitalize py-5 mt-4 border-b-2">
            <h3 className="text-2xl">your order</h3>
            {/* <span className="flex items-center gap-2 px-4 text-Success-700 text-xl font-medium">
              <BsFillPatchCheckFill />
              <p>paid</p>
            </span> */}
            <span className="flex items-center gap-2 px-4 text-orange-600 text-xl font-medium">
              <MdOutlineLocalShipping />
              <p>upon receipt</p>
            </span>
          </span>
          <ul className="w-full divide-y">
            <ProductCard />
            <ProductCard />
          </ul>
          <div className="w-full flex items-center justify-between capitalize text-xl py-5">
            <p>total</p>
            <b className="text-red-700">l.e 40,284,00</b>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-12 max-md:gap-7">
            <ul>
              <li className="flex items-center justify-between gap-4 capitalize mb-3">
                <p className="text-Grey-600 text-sm font-medium">shipping</p>
                <b>alexsandria ,EG%</b>
              </li>
              <li className="flex items-center justify-between gap-4 capitalize mb-3">
                <p className="text-Grey-600 text-sm font-medium">
                  mony transfer method
                </p>
                <b>payment card</b>
              </li>
            </ul>
            <ul>
              <li className="flex items-center justify-between gap-4 capitalize mb-3">
                <p className="text-Grey-600 text-sm font-medium">sub-total </p>
                <b>L.E 40,284,00</b>
              </li>
              <li className="flex items-center justify-between gap-4 capitalize mb-3">
                <p className="text-Grey-600 text-sm font-medium">discount</p>
                <b>0%</b>
              </li>
              <li className="flex items-center justify-between gap-4 capitalize mb-3">
                <p className="text-Grey-600 text-sm font-medium">
                  shipping Cost{" "}
                </p>
                <b>L.E 50</b>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-16 pb-14 gap-3">
            <p className="text-Grey-700">New Order, Click button bellow</p>
            <button className="rounded-full shadow-lg text-lg px-6 py-2 bg-Primary-600 text-white">
              shop now
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderComplete;
