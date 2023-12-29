import "./App.css";

import Pricing from "./PRICING_2023.png";

const App = () => {
  return (
    <div className="body">
      <div className="app">
        <div className="head-content">
          <h1>Looking to Commission Me?</h1>
          <p>
            My commissions are currently <b>LIMITED</b>. You are able to
            commission me for anything shown in my portfolio.
          </p>
          <p>
            Last updated: <b>December 29th, 2023</b>
          </p>
        </div>
        <div className="divider">
          <span>PRICING</span>
        </div>
        <div className="content">
          <p>
            Below is a graphic that visually explains my prices and what I
            charge per asset. Prices are in USD.
          </p>
          <div className="price-image-container">
            <img
              src={Pricing}
              class="price-image"
              alt="OatsFX Pricing Graphic"
            />
          </div>
          <p>
            If the above image is confusing, I've provided the above information
            in list format below.
          </p>
        </div>
        <div className="divider">
          <span>COMMISSION TERMS</span>
        </div>
        <div className="content">
          <p>
            This is outlined in less detail in the Pricing Graphic. I will do my
            best to follow any workflows I mention. More specific details below.
          </p>
          <ul>
            <li>To be added...</li>
          </ul>
        </div>
        <div className="divider" /* TODO: Make these expand? */>
          <span>WHERE YOU CAN REACH ME</span>
        </div>
        <div className="content" style={{ display: "flex" }}>
          <ul>
            <li>
              <b>Twitter</b> -{" "}
              <a
                className="small-a"
                href="https://twitter.com/OatsFX"
                target="_blank"
              >
                @OatsFX
              </a>
            </li>
            <li>
              <b>Discord</b> - Join my{" "}
              <a
                className="small-a"
                href="https://discord.gg/HXPU2W7"
                target="_blank"
              >
                server
              </a>{" "}
              and message me from there.{" "}
              <em>
                I'd prefer if we started on Twitter so I am less weary of scams.
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
