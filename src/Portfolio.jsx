import "./App.css";
import React from "react";
import PortfolioItem from "./PortfolioItem";

const App = () => {
  const portfolioItems = [
    {
      name: "3D Hunter Render",
      promoImage: "./portfolio-images/strand-hunter.png",
      description: "A 3D Render, made in Blender, of a Hunter from Destiny 2",
      promoLink: "",
      tags: ["Destiny2", "Blender", "3D"],
    },
    {
      name: "ATP Stream Package",
      promoImage: "./portfolio-images/atp.png",
      description: "Stream Graphics Package for All The Players",
      promoLink: "",
      tags: ["Twitch", "Package", "Logo"],
    },
    {
      name: "Ryusuri Stream Package",
      promoImage: "./portfolio-images/ryusuri.png",
      description: "Stream Graphics Package for Ryusuri",
      promoLink: "",
      tags: ["Twitch", "Package", "Logo"],
    },
    {
      name: "Pryali Branding",
      promoImage: "./portfolio-images/pryali.png",
      description: "Logo, Header, and Panels for Pryali",
      promoLink: "",
      tags: ["Twitch", "Header", "Logo", "Panels"],
    },
  ];

  const dummyPortItems = [
    {
      name: "Portfolio Item 1",
      promoImage: "./portfolio-images/strand-hunter.png",
      description: "Description",
      promoLink: "",
      tags: ["Destiny2", "Blender", "3D"],
    },
    {
      name: "Portfolio Item 2",
      promoImage: "./portfolio-images/strand-hunter.png",
      description:
        "CHIPI CHIPI CHAPA CHAPA DUBI DUBI DABA DABA MAGICO MI DUBI DUBI BOOM BOOM BOOM BOOM",
      promoLink: "",
      tags: ["Destiny2", "Blender", "3D"],
    },
    {
      name: "Portfolio Item 3",
      promoImage: "./portfolio-images/strand-hunter.png",
      description:
        "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
      promoLink: "",
      tags: ["Destiny2", "Blender", "3D"],
    },
  ];

  return (
    <div className="body">
      {/*<aside>
        <div className="side-container">
          <h2>Filters</h2>
          <hr></hr>
          <input
            type="checkbox"
            name="filter"
            value={false}
          />
            <label><span>Fun Facts</span></label>
        </div>
  </aside>*/}

      <div className="app">
        <div className="head-content">
          <h1>Graphic Design Portfolio</h1>
          <p>Here you can see most of the design work I've done.</p>
          <p>
            <em>This page is currently under construction.</em>
          </p>
          <p>
            My current portfolio is available{" "}
            <a
              className="small-a"
              href="https://www.behance.net/oatsfx"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            Last updated: <b>December 29th, 2023</b>
          </p>
        </div>

        <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
          {dummyPortItems.map((item) => (
            <PortfolioItem
              name={item.name}
              promoImage={item.promoImage}
              description={item.description}
              promoLink={item.promoLink}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
