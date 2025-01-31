import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import StoreInitializer from "./localProvider";
import Loading from "@/components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "E-commerce App with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Providers */}
        <Providers>
          {/* Store Initializer */}
          <StoreInitializer />
          {/* Header */}
          <Header />

          {/* Suspense fallback={<Loading />} */}
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
