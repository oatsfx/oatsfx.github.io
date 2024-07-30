import "./App.css";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const App = () => {
  const currentBangers = [
    'the entire "eternal sunshine" album by Ariana Grande',
    "Espresso by Sabrina Carpenter",
    "Determinate by Lemonade Mouth",
  ];

  let currentBangersStr = "The things on repeat: ";
  if (currentBangers.length > 1) {
    for (let i = 0; i < currentBangers.length; i++) {
      if (i === currentBangers.length - 1) {
        currentBangersStr += " and " + currentBangers[i];
      } else {
        currentBangersStr += currentBangers[i] + ", ";
      }
    }
  } else {
    currentBangers += currentBangers[0];
  }
  const birthday = new Date(2002, 10, 10, 0, 0, 0);
  const age = Math.abs(new Date(Date.now() - birthday).getUTCFullYear() - 1970);

  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} disableInteractive />
  ))`
    & .MuiTooltip-tooltip {
      color: #f2fffe;
      font-family: var(--font-display);
      letter-spacing: 0.3px;
      font-weight: 300;
      border: 1px solid;
      font-size: 14px;
      border-radius: 6px;
      border-image: linear-gradient(
          var(--angle),
          var(--oatsfx-pink),
          var(--oatsfx-blue)
        )
        10;
      animation: 6s rotate linear infinite;
      background: #0009;
      text-align: center;
      text-shadow: 0px 2px 2px #000;
    }
  `;

  return (
    <div className="body">
      <div className="app">
        <div className="head-content">
          <h1>Welcome!</h1>
          <p>This is the official OatsFX site.</p>
          <p>
            You can find pretty much everything that I do or have done, on this
            site.
          </p>
          <p>
            I am currently{" "}
            <StyledTooltip
              title="This is automatically calculated via subtraction: the current date minus my birthday. Imagine this site is still running way past my living and says like '182' or something."
              placement="bottom"
            >
              <span>{age}</span>
            </StyledTooltip>{" "}
            years old and located in Arizona, USA.
          </p>
        </div>
        <div className="divider">
          <span>about me</span>
        </div>
        <div className="content">
          <p>
            I'm OatsFX, but Ryan for some, and I develop software, design
            graphics, produce music, and play video games. More on me below.
          </p>
          <p>English is my primary language - it is also my only language.</p>
        </div>
        <div className="divider">
          <span>stuff i do</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <b>Software Development</b> - Passion-driven study; I am a college
              graduate from Arizona State and have achieved a BS in Computer
              Science (Software Engineering) in May of 2024.
            </li>
            <li>
              <b>Graphic Design</b> - During my early teenage years, I picked up
              programs such as Blender, Adobe Photoshop, Illustrator, and After
              Effects. I really enjoyed using these programs for 2D/3D art and
              animation.
            </li>
            <li>
              <b>Video Games</b> - I've been playing video games for as long as
              I've been consicious.
            </li>
            <li>
              <b>Content Creation</b> - Occasionally, I upload a YouTube video -
              it's probably a Destiny 2 soundtrack remix.
            </li>
            <li>
              <b>Music Production</b> - I see this as a hobby more than anything
              else. My own music lets me dabble in my favorite genres to hear
              something new.
            </li>
          </ul>
        </div>
        <div className="divider">
          <span>projects</span>
        </div>
        <div className="content">
          <h2>
            <a
              href="https://winnow.oatsfx.com/"
              target="_blank"
              className="winnow-color"
            >
              winnow
            </a>
          </h2>
          <p>A web app that has Destiny 2 related actions and information.</p>
          <p>A web utility built using TypeScript and React.</p>
        </div>
        <div className="content">
          <h2>
            <a
              href="https://levante.dev/"
              target="_blank"
              className="levante-color"
            >
              Levante
            </a>
          </h2>
          <p>
            A verified, open-source Discord bot for various Destiny 2 needs.
          </p>
          <p>
            A Destiny 2 bot is programmed in C# to interact with Bungie's API.
          </p>
        </div>
        <div className="content">
          <h2>
            <a
              href="https://dev-analyzer.sivworks.com/income"
              target="_blank"
              className="sivworks-color"
            >
              Sivworks - Investment Web Application
            </a>
          </h2>
          <p>
            Automatic option tracking, backtesting, and organizing software for
            all your stock option investing strategies!
          </p>
          <p>
            An investment web application built using a React front-end and
            Firebase back-end to allow users to practice various investment
            strategies.
          </p>
          <p>
            I had the opportunity to be a part of development for this
            application during my final year of my college career.
          </p>
        </div>
        <div className="content">
          <h2>
            <a
              href="https://youknowihadtodoubleit.com/"
              target="_blank"
              className="double-it-color"
            >
              YouKnowIHadToDoubleIt
            </a>
          </h2>
          <p>You know I had to double it.</p>
          <p>
            A React web app that is a learning platform for myself and a couple
            friends.
          </p>
        </div>
        <div className="divider">
          <span>stuff i enjoy</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <b>Video Games</b> - Bloons TD 6, Destiny 2, Pokémon
            </li>
            <li>
              <b>Music</b> - Pop, EDM (sub-genres to mention: Midtempo,
              Slap/Club House), Lo-Fi. {currentBangersStr}.
            </li>
            <li>
              <b>TV Series</b> - Avatar: The Last Airbender (Cartoon), Star
              Wars: The Clone Wars, Loki, The Boys, Black Mirror, Wednesday
            </li>
            <li>
              <b>Movies</b> - Star Wars, Tenet, Interstellar, Inception, Marvel
              Movies, Movies that will make me go "What just happened?" at the
              end.
            </li>
            <li>
              <b>Colors</b> - <a style={{ color: "#1995ff" }}>#1995FF</a> and{" "}
              <a style={{ color: "#EA3381" }}>#EA3381</a>
            </li>
          </ul>
        </div>

        <div className="divider">
          <span>achievements</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <b>Charity</b> - Raised over a total of $4,500 for the Bungie
              Foundation through my Levante project.
            </li>
            <li>
              <b>Robotics</b> - Qualified for the VeX Worlds Competition during
              the Tower Takeover game in 2019-2020.
            </li>
            <li>
              <b>Academics</b> - Received a 4.0 GPA and the Moeur Award from ASU
              upon graduation and was selected for Dean's list for all eight of
              my undergraduate semesters.
            </li>
            <li>
              <b>Content Features</b> - Bungie has featured many of my video and
              design works on their blogs.
              <div style={{ paddingLeft: 32 }}>
                <a
                  href="https://www.bungie.net/7/en/News/article/50802"
                  target="_blank"
                  className="small-a"
                >
                  Art 1
                </a>
                <br />
                <a
                  href="https://www.bungie.net/7/en/News/article/47767"
                  target="_blank"
                  className="small-a"
                >
                  Video 1
                </a>
                <br />
                <a
                  href="https://www.bungie.net/7/en/News/article/50975"
                  target="_blank"
                  className="small-a"
                >
                  Video 2
                </a>
                <br />
                <a
                  href="https://www.bungie.net/7/en/News/article/twid_09_14_2023"
                  target="_blank"
                  className="small-a"
                >
                  Video 3
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="divider" /* TODO: Make these expand? */>
          <span>social</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <b>GitHub</b> -{" "}
              <a
                className="small-a"
                href="https://github.com/OatsFX"
                target="_blank"
              >
                OatsFX
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
