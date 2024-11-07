import { useEffect, useState } from "react";
import {
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoTypescript,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import {
  BsGithub,
  BsBehance,
  BsYoutube,
  BsArrowDownShort,
  BsPersonFill,
  BsFillFileEarmarkCodeFill,
  BsTwitter,
} from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import {
  SiReact,
  SiCsharp,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiBlender,
  SiAdobeillustrator,
  SiCplusplus,
  SiJira,
  SiKofi,
} from "react-icons/si";

const Home: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  window.addEventListener("scroll", () => {
    setScroll(document.documentElement.scrollTop as number);
  });

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col w-full">
      <p></p>
      <BiSolidChevronUpCircle
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={
          "transition fixed bottom-[5%] left-[92%] z-50 cursor-pointer text-base-100" +
          (scroll > 300 ? " opacity-100" : " opacity-0")
        }
        size={48}
      />
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="flex flex-col w-full h-full items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="192 0 1155 747"
            className="absolute -z-50 top-[250px] overflow-x-hidden animate-move-fade"
            fill="currentColor"
          >
            <path d="M1017.98,225.1c82.29,94.79,105.53,275.34-11.54,406.88-118.53,133.18-322.96,142.54-453.36,20.42-131.33-122.99-125.48-314.76-31.89-427.66,65.04,77,147.4,119.09,248.75,119.03,101.04-.06,183.14-41.96,248.04-118.66Z" />
            <path d="M910.09,140.02c.2,77.49-62.57,140.57-140.05,140.76-77.36.19-140.48-62.78-140.59-140.23C629.34,62.87,691.86.14,769.51,0c77.71-.14,140.38,62.28,140.58,140.02Z" />
            <path d="M194.11,237.24c.14,53.6-43.28,97.23-96.87,97.36C43.74,334.74.07,291.19,0,237.61c-.07-53.73,43.17-97.12,96.88-97.22,53.75-.09,97.1,43.08,97.24,96.85Z" />
            <path d="M1345.42,237.24c-.14,53.6,43.28,97.23,96.87,97.36,53.5.13,97.17-43.42,97.24-97,.07-53.73-43.17-97.12-96.88-97.22-53.75-.09-97.1,43.08-97.24,96.85Z" />
            <path d="M383.28,445.74L80.47,234.52l90.37,512.52,321.08-56.62c-32.22-33.08-57.87-70.83-76.36-112.44-18.57-41.8-29.41-86.25-32.28-132.24Z" />
            <path d="M1459.07,234.52l-302.81,211.22c-2.21,35.51-9.24,70.29-21.03,103.75-16.66,47.29-42.4,90.7-76.5,129.02-3.62,4.06-7.3,8.03-11.06,11.92l321.02,56.6,90.37-512.52Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1540 747"
            className="w-28 animate-fade text-neutral"
            fill="currentColor"
          >
            <path d="M1017.98,225.1c82.29,94.79,105.53,275.34-11.54,406.88-118.53,133.18-322.96,142.54-453.36,20.42-131.33-122.99-125.48-314.76-31.89-427.66,65.04,77,147.4,119.09,248.75,119.03,101.04-.06,183.14-41.96,248.04-118.66Z" />
            <path d="M910.09,140.02c.2,77.49-62.57,140.57-140.05,140.76-77.36.19-140.48-62.78-140.59-140.23C629.34,62.87,691.86.14,769.51,0c77.71-.14,140.38,62.28,140.58,140.02Z" />
            <path d="M194.11,237.24c.14,53.6-43.28,97.23-96.87,97.36C43.74,334.74.07,291.19,0,237.61c-.07-53.73,43.17-97.12,96.88-97.22,53.75-.09,97.1,43.08,97.24,96.85Z" />
            <path d="M1345.42,237.24c-.14,53.6,43.28,97.23,96.87,97.36,53.5.13,97.17-43.42,97.24-97,.07-53.73-43.17-97.12-96.88-97.22-53.75-.09-97.1,43.08-97.24,96.85Z" />
            <path d="M383.28,445.74L80.47,234.52l90.37,512.52,321.08-56.62c-32.22-33.08-57.87-70.83-76.36-112.44-18.57-41.8-29.41-86.25-32.28-132.24Z" />
            <path d="M1459.07,234.52l-302.81,211.22c-2.21,35.51-9.24,70.29-21.03,103.75-16.66,47.29-42.4,90.7-76.5,129.02-3.62,4.06-7.3,8.03-11.06,11.92l321.02,56.6,90.37-512.52Z" />
          </svg>

          <p className="font-display tracking-wide text-4xl text-neutral font-semibold italic animate-fade-lg pb-1">
            OatsFX
          </p>
          <div className="flex flex-col md:flex-row gap-4 animate-fade-xl px-8 text-nowrap">
            <p className="italic text-neutral">Software Engineer</p>
            <p className="italic text-neutral">Computer Scientist</p>
            <p className="italic text-neutral">Graphic/Motion Designer</p>
            <p className="italic text-neutral">Music Producer</p>
          </div>
          <div className="flex gap-4 animate-fade-xl items-center">
            <a
              href="https://github.com/OatsFX"
              target="_blank"
              rel="noreferrer"
              className="transition text-neutral hover:text-secondary"
            >
              <BsGithub size={22} />
            </a>
            <a
              href="https://youtube.com/@oatsfx"
              target="_blank"
              rel="noreferrer"
              className="transition text-neutral hover:text-secondary"
            >
              <BsYoutube size={22} />
            </a>
            {/* <a
              href="https://twitter.com/OatsFX"
              target="_blank"
              className="transition text-neutral hover:text-secondary"
            >
              <BsTwitter size={22} />
            </a> */}
            <a
              href="https://behance.com/OatsFX"
              target="_blank"
              rel="noreferrer"
              className="transition text-neutral hover:text-secondary"
            >
              <BsBehance size={22} />
            </a>
            <a
              href="https://ko-fi.com/OatsFX"
              target="_blank"
              rel="noreferrer"
              className="transition text-neutral hover:text-secondary"
            >
              <SiKofi size={22} />
            </a>
          </div>
        </div>
        <BsArrowDownShort
          size={80}
          onClick={() => {
            const element = document.getElementById("info");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce hover:[animation-play-state:paused] hover:cursor-pointer"
        />
      </div>

      <div
        className="flex flex-col bg-neutral text-base-100 w-full items-center py-6 gap-20"
        id="info"
      >
        <div className="flex flex-col w-2/3">
          {/* <p className="font-black text-9xl tracking-wider absolute right-[225px] text-right -bottom-[300px] opacity-5">
            ABOUT
          </p> */}

          <p className="font-display flex gap-2 font-bold items-center text-2xl tracking-wide">
            <BsPersonFill size={24} />
            ABOUT
          </p>
          <div className="flex flex-col lg:flex-row gap-4 px-4 py-2 items-center lg:items-start justify-between">
            <p className="w-full lg:w-2/3">
              Known as OatsFX online, I am personally known as Ryan. I am a
              Software Engineering focused Computer Science graduate with a
              strong passion for developing full-stack applications. I have
              solid proficiencies in Javascript, Typescript, React, and anything
              interface related. I strive to improve user interfaces and
              experiences with their satisfaction in mind. When I'm not telling
              computers what to do, I'm playing my favorite games, spending time
              with family, or producing music.
            </p>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-2">
                <BiLogoJavascript size={56} />
                <BiLogoTypescript size={56} />
                <SiReact size={56} />
                <SiCsharp size={56} />
              </div>
              <div className="flex gap-2 pb-4">
                <BiLogoPython size={42} />
                <BiLogoJava size={42} />
                <SiCplusplus size={42} />
                <SiJira size={42} />
              </div>
              <div className="flex gap-2">
                <SiAdobephotoshop size={56} />
                <SiAdobeaftereffects size={56} />
                <SiBlender size={56} />
              </div>
              <div className="flex gap-2">
                <BiLogoFigma size={42} />
                <SiAdobeillustrator size={42} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <p className="font-display flex gap-2 font-bold items-center text-2xl tracking-wide">
            <BsFillFileEarmarkCodeFill size={24} />
            PROJECTS
          </p>
          <div className="flex flex-col lg:flex-row flex-inline gap-4 px-4 py-2">
            <a
              href="https://btd6.oatsfx.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col w-full px-4 py-2 outline outline-transparent transition-all ease-in-out border-b border-base-100 hover:outline-1 hover:outline-base-100"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">OatsFX btd6 tool</p>
                  <p className="text-xs">November 2024 - Present</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  <BiLogoTypescript size={36} />
                  <SiReact size={36} />
                </div>
              </div>
            </a>
            <a
              href="https://winnow.oatsfx.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col w-full px-4 py-2 outline outline-transparent transition-all ease-in-out border-b border-base-100 hover:outline-1 hover:outline-base-100"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">winnow</p>
                  <p className="text-xs">June 2024 - Present</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  <BiLogoTypescript size={36} />
                  <SiReact size={36} />
                </div>
              </div>
            </a>
            <a
              href="https://www.levante.dev/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col w-full px-4 py-2 outline outline-transparent transition-all ease-in-out border-b border-base-100 hover:outline-1 hover:outline-base-100"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">Levante</p>
                  <p className="text-xs">August 2021 - Present</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  <SiCsharp size={36} />
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row flex-inline gap-4 px-4 py-2">
            <a
              href="https://dev-analyzer.sivworks.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col w-full lg:w-2/3 px-4 py-2 outline outline-transparent transition-all ease-in-out border-b border-base-100 hover:outline-1 hover:outline-base-100"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">
                    Sivworks - Investment Web Application
                  </p>
                  <p className="text-xs">September 2023 - May 2024</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  <BiLogoTypescript size={36} />
                  <SiReact size={36} />
                  <BiLogoFirebase size={36} />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <p className="font-display flex gap-2 font-bold items-center text-2xl tracking-wide">
            <FaTrophy size={24} />
            ACHIEVEMENTS
          </p>

          <div className="flex flex-col lg:flex-row flex-inline gap-4 px-4 py-2">
            <p>
              Recipient of ASU's Ira A. Fulton School of Engineering's{" "}
              <span className="text-primary font-bold">Moeur Award</span> for{" "}
              <span className="text-secondary">
                outstanding academic achievement
              </span>
              .
            </p>
            <p>
              Made the ASU's Ira A. Fulton School of Engineering{" "}
              <span className="text-primary font-bold">Dean's List</span> in
              eight consecutive semesters for{" "}
              <span className="text-secondary">outstanding academics</span>.
            </p>
            <p>
              In high school, my VeX Robotics team qualified for the{" "}
              <span className="text-primary font-bold">Worlds competition</span>{" "}
              during the 2019-2020 school year.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row flex-inline gap-4 px-4 py-2">
            <p>
              I've used my platforms for good and raised over{" "}
              <span className="text-primary font-bold">$5,000</span> for the{" "}
              <a
                href="https://tiltify.com/@levante/profile"
                target="_blank"
                rel="noreferrer"
                className="text-secondary"
              >
                Bungie Foundation
              </a>{" "}
              charity.
            </p>
            <p>
              My artistic creations have been{" "}
              <span className="text-primary font-bold">featured</span> in
              numerous Bungie-authored blog posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
