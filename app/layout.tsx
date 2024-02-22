import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/footer";

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
      <body className={Acumin.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
