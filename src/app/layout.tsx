import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import localFont from "next/font/local";
import TransitionProvider from "@/providers/TransitionProvider/TransitionProvider";
import { Providers } from "@/providers/ThemeProvider/ThemeProvider";

export const metadata: Metadata = {
  title: "Humanly",
  description: "Creative Studio Agency",
};

export const ppneue = localFont({
  src: [
    { path: "../fonts/ppneue/ppneuemontreal-thin.otf", weight: "100", style: "normal" },
    { path: "../fonts/ppneue/ppneuemontreal-book.otf", weight: "400", style: "normal" },
    { path: "../fonts/ppneue/ppneuemontreal-italic.otf", weight: "400", style: "italic" },
    { path: "../fonts/ppneue/ppneuemontreal-medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/ppneue/ppneuemontreal-semibolditalic.otf", weight: "600", style: "italic" },
    { path: "../fonts/ppneue/ppneuemontreal-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-ppneue",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-ppneue)" }} className={`${ppneue.variable} dark:bg-black bg-white dark:text-white  text-black`}>

          <Suspense fallback={"..."}>
            <TransitionProvider>
              <Providers><div className="container">{children}</div></Providers>
            </TransitionProvider>
          </Suspense>
      </body>
    </html>
  );
}
