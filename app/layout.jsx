import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

//import components - Header
import Header from "./components/Header";
//import components - Footer
import Footer from "./components/Footer";
//import javascript link

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZenSpot | Booking App",
  description: "We provide booking system for wellness businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="dk">
      <body className={inter.className}>
        <div id="wrapper">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
