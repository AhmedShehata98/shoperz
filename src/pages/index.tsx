import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";
import Slider from "@/components/Slider";
import ShopFeats from "@/components/ShopFeats";

export const metadata: Metadata = {
  title: "Shoperz | home",
  description: "is a e-commerce website",
};
export default function Home() {
  return (
    <>
      <main>
        <Slider />
        <ShopFeats />
      </main>
    </>
  );
}
