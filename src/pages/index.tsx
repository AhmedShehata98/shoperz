import type { Metadata } from "next";
import Slider from "@/components/Slider";
import ShopFeats from "@/components/ShopFeats";
import SlidesProducts from "@/components/SlidesProducts";
import Head from "next/head";
import CategorySection from "@/components/CategorySection";
import BestSellers from "@/components/Bestsellers";
import BigDeals from "@/components/BigDeals";
import Banners from "@/components/Banners";
import ProductLists from "@/components/ProductLists";

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
        <CategorySection />
        <BestSellers />
        <Banners />
        <BigDeals />
        <ProductLists />
      </main>
    </>
  );
}
