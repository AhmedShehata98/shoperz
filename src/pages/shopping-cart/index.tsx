import PaymentStatusbar from "@/components/PaymentStatusbar";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
import Cart from "./components/Cart";
import OrderReport from "./components/OrderReport";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

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
      <main className="min-h-screen flex items-start justify-start flex-col">
        <PaymentStatusbar currentPage="Shopping Cart" />
        <section className="container max-w-5xl mx-auto flex max-md:flex-col items-start justify-between gap-3 max-lg:px-3">
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
        <section className="container max-w-5xl mx-auto flex flex-col items-start justify-start gap-3">
          <header className="w-full grid grid-cols-2 capitalize text-Primary-800 text-lg font-medium py-3 max-lg:px-3">
            <p>delivery</p>
            <p> free returns</p>
          </header>
          <ul className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 max-lg:px-4">
            <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
              <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
                <AiOutlineTransaction />
              </span>
              <h4 className="font-medium text-xl">
                Order by 10pm for free next day delivery on Orders overs $100
              </h4>
              <p className="text-Grey-700 text-xl">
                We deliver Monday to Saturday - excluding Holidays
              </p>
            </li>
            <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
              <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
                <BsBoxSeam />
              </span>
              <h4 className="font-medium text-xl">
                Free next day delivery to stores.
              </h4>
              <p className="text-Grey-700 text-xl">
                Home delivery is $4.99 for orders under $100 and is FREE for all
                orders over $100
              </p>
            </li>
            <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
              <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
                <MdOutlineLocalShipping />
              </span>
              <p className="text-Grey-700 text-xl">
                30 days to return it to us for a refund. We have made returns SO
                EASY - you can now return your order to a store or send it with
                FedEx FOR FREE
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default ShoppingCart;
