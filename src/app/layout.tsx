import "./globals.scss";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { ReactNode } from "react";
import TokenProvider from "@/shared/providers/TokenProvider";

export const metadata = { title: "Abelohost Shop" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TokenProvider />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
