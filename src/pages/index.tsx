import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const roboto = Roboto({
  subsets: ["latin"],
  // variable: "--font-roboto",
  display: "swap",
  weight: ["400", "300", "500", "700"],
});
export const metadata: Metadata = {
  title: "Shoperz | home",
  description: "is a e-commerce website",
};
export default function Home() {
  return (
    <>
      <main className={`font-roboto`}></main>
    </>
  );
}
