import type { Metadata } from "next";
import Slider from "@/components/Slider";
import ShopFeats from "@/components/ShopFeats";
import SlidesProducts from "@/components/SlidesProducts";
import Head from "next/head";
import Category from "@/components/Category";
import BestSellers from "@/components/Bestsellers";
import BigDeals from "@/components/BigDeals";
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Shoperz | home </title>
      </Head> */}
      <main className="">
        <Slider />
        <ShopFeats />
        <SlidesProducts />
        <Category />
        <BestSellers />
        <Banners />
        <BigDeals />
      </main>
    </>
  );
}
