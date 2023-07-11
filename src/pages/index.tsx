import Slider from "@/features/home/components/Slider";
import Head from "next/head";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";

const ShopFeats = dynamic(
  () => import("@/features/home/components/ShopFeats"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const FeaturedProducts = dynamic(
  () => import("@/features/home/components/FeaturedProducts"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const CategorySection = dynamic(
  () => import("@/features/home/components/CategorySection"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const Banners = dynamic(() => import("@/features/home/components/Banners"), {
  loading: () => <QuickLoadingModul />,
});
const BigDeals = dynamic(() => import("@/features/home/components/BigDeals"), {
  loading: () => <QuickLoadingModul />,
});
const Brands = dynamic(() => import("@/features/home/components/Brands"), {
  loading: () => <QuickLoadingModul />,
});
const BestSellers = dynamic(
  () => import("@/features/home/components/BestSellers"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const ProductLists = dynamic(
  () => import("@/features/home/components/ProductLists"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Shoperz | home </title>
      </Head>
      <main>
        <Slider />
        <ShopFeats />
        <FeaturedProducts />
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
