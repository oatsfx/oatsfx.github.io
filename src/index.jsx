import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { Routes, Route, HashRouter, Link } from "react-router-dom";

import App from "./App.jsx";
import Commissions from "./Commissions.jsx";
import Portfolio from "./Portfolio.jsx";

import Logo from "./OatsFX-Logo-Colored.png";

const fill = () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.className = "navbar filled";
  } else {
    navbar.className = "navbar";
  }
};

const BuildHeader = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : null
  );

  if (currentTheme === null) {
    localStorage.setItem("theme", "light");
  }

  if (currentTheme === "light") {
    document.documentElement.style.setProperty("--oatsfx-back", "#f2f8fd");
    document.documentElement.style.setProperty("--oatsfx-fore", "#181b1e");
  } else {
    document.documentElement.style.setProperty("--oatsfx-back", "#181b1e");
    document.documentElement.style.setProperty("--oatsfx-fore", "#f2f8fd");
  }

  useEffect(() => {
    window.addEventListener("scroll", fill);
  });

  const toggleDark = () => {
    var darkColor =
      document.documentElement.style.getPropertyValue("--oatsfx-back");
    document.documentElement.style.setProperty(
      "--oatsfx-back",
      document.documentElement.style.getPropertyValue("--oatsfx-fore")
    );
    document.documentElement.style.setProperty("--oatsfx-fore", darkColor);

    if (currentTheme === "light") {
      console.log("lights off");
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      console.log("lights on");
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="navbar" id="navbar">
      <img src={Logo} className="logo" />
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/portfolio/"}>Portfolio</Link>
        <Link to={"/commissions/"}>Commissions</Link>
        <Link onClick={toggleDark}>
          {currentTheme === "light" ? "Dark Mode?" : "Blind Mode?"}
        </Link>
      </nav>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <BuildHeader />
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/commissions/" element={<Commissions />} />
        <Route path="/portfolio/" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
