import { Html, Head, Main, NextScript } from "next/document";

import type { Metadata } from "next";

// export const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="portalWindow"></div>
        <NextScript />
      </body>
    </Html>
  );
}
