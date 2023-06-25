import Image from "next/image";
import React from "react";
import notFoundImg from "@/assets/not-found-404.svg";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not founded</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <section className="container max-w-5xl mx-auto">
          <figure className="w-full flex items-center justify-center my-4">
            <Image
              src={notFoundImg}
              alt="not-found-404.svg"
              className="!max-w-xs"
            />
          </figure>
          <h4 className="w-10/12 lg:1/2 mx-auto pb-4 text-2xl text-red-600 font-bold capitalize text-center">
            This page does not exist or is currently under construction and
            development.
          </h4>
          <Link
            href={"/"}
            className="custom-button w-2/3 lg:w-2/5 mb-16 mx-auto"
          >
            go to home
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
