import Footer from "@/layout/Footer";
import Headerbar from "@/layout/Headerbar";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/register" && <Headerbar />}
      <Component {...pageProps} />
      {router.pathname !== "/register" && <Footer />}
    </>
  );
}
export default wrapper.withRedux(App);
