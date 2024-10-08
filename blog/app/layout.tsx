import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Montserrat } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generated by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
