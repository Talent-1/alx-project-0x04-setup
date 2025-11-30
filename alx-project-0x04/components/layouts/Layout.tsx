import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
          <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;