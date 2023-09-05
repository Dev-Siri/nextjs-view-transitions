import { Inter } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Transitions from "./transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "View Transitions API Demo with Next.js",
  /*
    The custom meta tag here is and it is a VERY VERY VERY experimental feature.
    This is a cross-origin document transitions (view transition) that work without JavaScript and require
    no javascript to run. But it is only available with a flag in chrome and therefore not recommended.
  */
  // other: {
  //   "view-transition": "same-origin",
  // },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`p-10 ${inter.className}`}>
        <Transitions>{children}</Transitions>
      </body>
    </html>
  );
}
