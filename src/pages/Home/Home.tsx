import { OatsFXLogo } from "components/OatsFXLogo";
import ProjectButton from "components/ProjectButton/ProjectButton";
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

  const projects = [
    {
      name: "OatsFX btd6 tool",
      dateString: "November 2024 - Present",
      endContent: (
        <>
          <BiLogoTypescript size={36} />
          <SiReact size={36} />
        </>
      ),
      href: "https://btd6.oatsfx.com/",
      disabled: false,
    },
    {
      name: "winnow",
      dateString: "June 2024 - Present",
      endContent: (
        <>
          <BiLogoTypescript size={36} />
          <SiReact size={36} />
        </>
      ),
      href: "https://winnow.oatsfx.com/",
      disabled: false,
    },
    {
      name: "Levante",
      dateString: "August 2021 - Present",
      endContent: (
        <>
          <SiCsharp size={36} />
        </>
      ),
      href: "https://levante.dev/",
      disabled: false,
    },
    {
      name: "Sivworks - Investment Web Application",
      dateString: "September 2023 - May 2024",
      endContent: (
        <>
          <BiLogoTypescript size={36} />
          <SiReact size={36} />
          <BiLogoFirebase size={36} />
        </>
      ),
      href: "",
      disabled: true,
    },
  ];

  window.addEventListener("scroll", () => {
    setScroll(document.documentElement.scrollTop as number);
  });

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col w-full">
      <BiSolidChevronUpCircle
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={
          "transition fixed bottom-[5%] right-[2rem] md:right-[4rem] z-50 cursor-pointer text-base-100" +
          (scroll > 300 ? " opacity-100" : " opacity-0")
        }
        size={48}
      />
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="flex flex-col w-full h-full items-center justify-center gap-1">
          <OatsFXLogo
            viewBox="192 0 1155 747"
            className="absolute -z-50 top-[250px] overflow-x-hidden animate-move-fade"
          />
          <OatsFXLogo className="w-28 animate-fade text-neutral" />

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
            {/* <a
              href="https://ko-fi.com/OatsFX"
              target="_blank"
              rel="noreferrer"
              className="transition text-neutral hover:text-secondary"
            >
              <SiKofi size={22} />
            </a> */}
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
              strong passion for developing projects intended to solve a
              problem. I have solid proficiencies in Javascript, Typescript,
              React, and C#. I strive to improve user interfaces and experiences
              with the user and their satisfaction in mind. When I'm not telling
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-2">
            {projects.map((p, i) => (
              <ProjectButton
                name={p.name}
                dateString={p.dateString}
                endContent={p.endContent}
                href={p.href}
                disabled={p.disabled}
              />
            ))}
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
              <span className="text-primary font-bold">$6,000</span> for the{" "}
              <a
                href="https://tiltify.com/@oatsfx/profile"
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
