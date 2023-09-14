import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sable Bonds",
  description: "Sable Ltd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-sable-green-page-bg">
      <body className={`${inter.className} foo bg-black-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
