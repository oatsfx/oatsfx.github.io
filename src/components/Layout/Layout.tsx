import React from "react";
import { Header } from "../Header";
import { PageView } from "components/PageView";
import { Footer } from "components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <PageView />
      <Footer />
    </div>
  );
};

export default Layout;
