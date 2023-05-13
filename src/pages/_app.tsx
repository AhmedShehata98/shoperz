import Footer from "@/layout/Footer";
import Headerbar from "@/layout/Headerbar";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "500", "700"],
});

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={roboto.className}>
          {router.pathname !== "/register" && <Headerbar />}
          <Component {...pageProps} />
          {router.pathname !== "/register" && <Footer />}
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default wrapper.withRedux(App);
