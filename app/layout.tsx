"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Future World",
//   description: "Hecho por Hector",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  console.log("Hola mundo Layout")
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
