import type { Metadata } from "next";
import Slider from "@/components/Slider";
import SlidesProducts from "@/components/SlidesProducts";
import Head from "next/head";
import CategorySection from "@/components/CategorySection";
import BestSellers from "@/components/BestSellers";
import BigDeals from "@/components/BigDeals";
import Banners from "@/components/Banners";
import ProductLists from "@/components/ProductLists";
import Brands from "@/components/Brands";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";

const ShopFeats = dynamic(() => import("@/components/ShopFeats"), {
  loading: () => <QuickLoadingModul />,
});

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Shoperz | home </title>
      </Head>
      <main className="">
        <Slider />
        <ShopFeats />
        <SlidesProducts />
        <CategorySection />
        <BestSellers />
        <Banners />
        <BigDeals />
        <Brands />
        <ProductLists />
      </main>
    </>
  );
}
