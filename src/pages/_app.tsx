import Footer from "@/layout/Footer";
import Headerbar from "@/layout/Headerbar";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "500", "700"],
});

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();

  return (
    <Provider store={store}>
      <div className={roboto.className}>
        {router.pathname !== "/register" && <Headerbar />}
        <Component {...pageProps} />
        {router.pathname !== "/register" && <Footer />}
      </div>
    </Provider>
  );
}
export default App;
