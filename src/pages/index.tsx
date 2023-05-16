import type { Metadata } from "next";
import Slider from "@/components/Slider";
import ShopFeats from "@/components/ShopFeats";
import FeaturedProducts from "@/components/FeaturedProducts";

export const metadata: Metadata = {
  title: "Shoperz | home",
  description: "is a e-commerce website",
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Shoperz | home </title>
      </Head>
      <main>
        <Slider />
        <ShopFeats />
        {/* <FeaturedProducts /> */}
      </main>
    </>
  );
}
