import { OatsFXLogo } from "components/OatsFXLogo";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center sticky top-[100vh] p-4 bg-base-300 text-base-100">
      <aside>
        <OatsFXLogo className="w-12" />
        <p className="font-semibold text-xs">OatsFX - 2026</p>
        <p className="italic text-xs"></p>
      </aside>
    </footer>
  );
};

export default Footer;
