import type { Metadata } from "next";
import localFont from "next/font/local";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const Nanum = localFont({
  src: "../public/fonts/NanumGothicCoding-Regular.ttf",
  variable: "--font-nanum",
});

const Acumin = localFont({
  src: "../public/fonts/Acumin-Variable-Concept.ttf",
  variable: "--font-acumin",
});

export const metadata: Metadata = {
  title: "LIT KICKS",
  description: "LIT KICKS STORE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Nanum.variable} ${Acumin.variable} bg-black text-white`}
      >
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
