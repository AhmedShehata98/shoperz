import Footer from "@/layout/Footer";
import Headerbar from "@/layout/Headerbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <div className={roboto.className}>
        {router.pathname !== "/register" && <Headerbar />}
        <Component {...pageProps} />
        {router.pathname !== "/register" && <Footer />}
      </div>
    </>
  );
}
