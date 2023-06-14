import { useEffect, useState } from "react";
import { makeStore, wrapper } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import Portal from "@/hooks/Protal";
import LoadingModal from "@/components/LoadingModal";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";

import "react-toastify/dist/ReactToastify.css";
const Headerbar = dynamic(() => import("@/layout/Headerbar"), {
  loading: () => <QuickLoadingModul />,
});
const Footer = dynamic(() => import("@/layout/Footer"), {
  loading: () => <QuickLoadingModul />,
});
const ToastContainer = dynamic(
  () => import("react-toastify").then((toast) => toast.ToastContainer),
  {
    loading: () => <QuickLoadingModul />,
  }
);

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "500", "700"],
});

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const [isRouting, setIsRouting] = useState(false);
  const { pathname, events } = useRouter();
  useEffect(() => {
    events.on("routeChangeStart", () => {
      setIsRouting(true);
    });
    events.on("routeChangeComplete", () => {
      setIsRouting(false);
    });
  }, [events]);

  return (
    <Provider store={store}>
      <div className={roboto.className}>
        {pathname === "/register" ? null : <Headerbar />}
        <Component {...pageProps} />
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {isRouting ? (
          <Portal>
            <LoadingModal />
          </Portal>
        ) : null}
      </div>
    </Provider>
  );
}
export default App;
