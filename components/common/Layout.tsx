import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
}
