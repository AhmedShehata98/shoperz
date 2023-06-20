import Slider from "@/components/Slider";
import Head from "next/head";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";

const ShopFeats = dynamic(() => import("@/components/ShopFeats"), {
  loading: () => <QuickLoadingModul />,
});
const SlidesProducts = dynamic(() => import("@/components/FeaturedProducts"), {
  loading: () => <QuickLoadingModul />,
});
const CategorySection = dynamic(() => import("@/components/CategorySection"), {
  loading: () => <QuickLoadingModul />,
});
const Banners = dynamic(() => import("@/components/Banners"), {
  loading: () => <QuickLoadingModul />,
});
const BigDeals = dynamic(() => import("@/components/BigDeals"), {
  loading: () => <QuickLoadingModul />,
});
const Brands = dynamic(() => import("@/components/Brands"), {
  loading: () => <QuickLoadingModul />,
});
const BestSellers = dynamic(() => import("@/components/BestSellers"), {
  loading: () => <QuickLoadingModul />,
});
const ProductLists = dynamic(() => import("@/components/ProductLists"), {
  loading: () => <QuickLoadingModul />,
});

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Shoperz | home </title>
      </Head>
      <main>
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
