import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not The End",
  description: "A NGO for raising mental health awareness ",
  keywords: ["USA", "NGO", "Mental Health", "Awareness", "Help"],
  authors: [{ name: "Avani", url: "" }],
  creator: "Shashanka Rao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
