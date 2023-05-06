import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "500", "700"],
});
export default function Home() {
  return (
    <>
      <head>
        <title>Shoperz</title>
      </head>
      <main className={`${roboto.variable} font-sans`}></main>
    </>
  );
}
