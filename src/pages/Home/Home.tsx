import { useEffect, useState } from "react";
import {
  BiLogoFigma,
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
            viewBox="0 0 1540 747"
            className="absolute -z-50 top-[225px] min-w-[110rem] max-w-[110rem] animate-move-fade"
            fill="currentColor"
          >
            <path d="M1019.52,224.28c98.97,123.27,93.79,314-35.72,431.94-129.07,117.53-327.83,108.76-447.08-20.42-115.54-125.15-103.38-304.78-15.2-411.29,64.95,77.32,147.41,119.44,248.85,119.46,101.46.02,183.94-42.07,249.15-119.69Z" />
            <path d="M504.86,688.23c-111.45,19.65-222.13,39.16-333.26,58.76-2.46-13.82-4.8-26.88-7.11-39.95-10.56-59.82-21.1-119.64-31.65-179.46-10.46-59.33-20.91-118.66-31.37-177.98-.81-4.59-.21-10.53-2.88-13.35-2.46-2.6-8.45-1.89-12.9-2.54-44.09-6.47-76.52-36.93-83.65-80.78-9.44-57.99,32.03-105.12,81.88-111.59,54.96-7.13,102.38,28.7,110.07,83.37,3.8,26.97-3.37,51.5-20.42,73.51,2.06,1.48,4.04,2.94,6.05,4.34,66.43,46.53,132.85,93.08,199.33,139.53,3.01,2.1,4.33,4.25,4.5,8.05,4.08,87.94,38.7,161.8,102.85,221.91,5.79,5.42,11.96,10.44,18.57,16.18Z" />
            <path d="M1366.98,298.45c-24.84-35.67-28.77-72.45-7.46-110.28,19.93-35.4,61.77-54.07,100.96-46.41,41.51,8.11,72.85,40.46,78.79,81.34,8.37,57.61-34.81,109.27-93.07,111.25-2.96.1-4.31.72-4.88,3.98-13.58,77.7-27.29,155.38-40.98,233.06-10.02,56.87-20.04,113.74-30.08,170.61-.25,1.44-.66,2.85-1.16,4.97-110.97-19.57-221.64-39.08-333.09-58.73,6.4-5.54,12.28-10.38,17.87-15.53,56.88-52.47,90.69-117.07,101.32-193.72,1.3-9.38,1.81-18.9,2.23-28.38.17-3.86,1.29-6.28,4.54-8.55,67.04-46.81,134-93.75,200.97-140.66,1.35-.94,2.66-1.93,4.05-2.95Z" />
            <path d="M770.27.03c73.19-1.44,140.37,58.71,140.67,140.05.29,77.47-62.52,140.41-140.33,140.64-77.55.22-140.58-62.51-140.63-140.3C629.92,59.03,697.14-1.25,770.27.03Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1540 747"
            className="w-28 animate-fade"
            fill="currentColor"
          >
            <path d="M1019.52,224.28c98.97,123.27,93.79,314-35.72,431.94-129.07,117.53-327.83,108.76-447.08-20.42-115.54-125.15-103.38-304.78-15.2-411.29,64.95,77.32,147.41,119.44,248.85,119.46,101.46.02,183.94-42.07,249.15-119.69Z" />
            <path d="M504.86,688.23c-111.45,19.65-222.13,39.16-333.26,58.76-2.46-13.82-4.8-26.88-7.11-39.95-10.56-59.82-21.1-119.64-31.65-179.46-10.46-59.33-20.91-118.66-31.37-177.98-.81-4.59-.21-10.53-2.88-13.35-2.46-2.6-8.45-1.89-12.9-2.54-44.09-6.47-76.52-36.93-83.65-80.78-9.44-57.99,32.03-105.12,81.88-111.59,54.96-7.13,102.38,28.7,110.07,83.37,3.8,26.97-3.37,51.5-20.42,73.51,2.06,1.48,4.04,2.94,6.05,4.34,66.43,46.53,132.85,93.08,199.33,139.53,3.01,2.1,4.33,4.25,4.5,8.05,4.08,87.94,38.7,161.8,102.85,221.91,5.79,5.42,11.96,10.44,18.57,16.18Z" />
            <path d="M1366.98,298.45c-24.84-35.67-28.77-72.45-7.46-110.28,19.93-35.4,61.77-54.07,100.96-46.41,41.51,8.11,72.85,40.46,78.79,81.34,8.37,57.61-34.81,109.27-93.07,111.25-2.96.1-4.31.72-4.88,3.98-13.58,77.7-27.29,155.38-40.98,233.06-10.02,56.87-20.04,113.74-30.08,170.61-.25,1.44-.66,2.85-1.16,4.97-110.97-19.57-221.64-39.08-333.09-58.73,6.4-5.54,12.28-10.38,17.87-15.53,56.88-52.47,90.69-117.07,101.32-193.72,1.3-9.38,1.81-18.9,2.23-28.38.17-3.86,1.29-6.28,4.54-8.55,67.04-46.81,134-93.75,200.97-140.66,1.35-.94,2.66-1.93,4.05-2.95Z" />
            <path d="M770.27.03c73.19-1.44,140.37,58.71,140.67,140.05.29,77.47-62.52,140.41-140.33,140.64-77.55.22-140.58-62.51-140.63-140.3C629.92,59.03,697.14-1.25,770.27.03Z" />
          </svg>

          <p className="font-display tracking-wide text-4xl font-semibold italic animate-fade-lg pb-1">
            OatsFX
          </p>
          <div className="flex flex-col md:flex-row gap-4 animate-fade-xl px-8 text-nowrap">
            <p className="italic">Software Engineer</p>
            <p className="italic">Computer Scientist</p>
            <p className="italic">Graphic/Motion Designer</p>
            <p className="italic">Music Producer</p>
          </div>
          <div className="flex gap-4 animate-fade-xl items-center">
            <a
              href="https://github.com/OatsFX"
              target="_blank"
              className="transition hover:text-secondary"
            >
              <BsGithub size={22} />
            </a>
            <a
              href="https://youtube.com/@oatsfx"
              target="_blank"
              className="transition hover:text-secondary"
            >
              <BsYoutube size={22} />
            </a>
            {/* <a
              href="https://twitter.com/OatsFX"
              target="_blank"
              className="transition hover:text-secondary"
            >
              <BsTwitter size={22} />
            </a> */}
            <a
              href="https://behance.com/OatsFX"
              target="_blank"
              className="transition hover:text-secondary"
            >
              <BsBehance size={22} />
            </a>
            <a
              href="https://ko-fi.com/OatsFX"
              target="_blank"
              className="transition hover:text-secondary"
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
            <div className="flex flex-col w-full px-4 py-2 rounded-xs outline outline-1">
              <p className="font-semibold">winnow</p>
              <p className="text-sm">Typescript, React</p>
              <p className="text-xs">June 2024 - Present</p>
            </div>
            <div className="flex flex-col w-full px-4 py-2 rounded-xs outline outline-1">
              <p className="font-semibold">Levante</p>
              <p className="text-sm">C#</p>
              <p className="text-xs">August 2021 - Present</p>
            </div>
            <div className="flex flex-col w-full px-4 py-2 rounded-xs outline outline-1">
              <p className="font-semibold">
                Sivworks - Investment Web Application
              </p>
              <p className="text-sm">Typescript, React, Firebase</p>
              <p className="text-xs">September 2023 - May 2024</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <p className="font-display flex gap-2 font-bold items-center text-2xl tracking-wide">
            <FaTrophy size={24} />
            ACHIEVEMENTS
          </p>
          <div className="flex flex-col lg:flex-row flex-inline gap-4 px-4 py-2">
            <p>
              I've used my platforms for good and raised over $4,500 for the
              Bungie Foundation.
            </p>
            <p>
              In high school, my VeX Robotics team qualified for the Worlds
              competition during the 2019-2020 school year.
            </p>
            <p>
              My artistic creations have been featured in numerous
              Bungie-authored blog posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
