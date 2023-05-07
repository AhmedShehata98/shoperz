import Headerbar from "@/layout/Headerbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/register" && <Headerbar />}
      <Component {...pageProps} />
    </>
  );
}
