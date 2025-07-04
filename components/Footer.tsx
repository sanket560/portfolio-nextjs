import MagicButton from "./ui/MagicButton";
import github from "../Images/skills/github.svg";
import whitegithub from "../Images/skills/white-github.svg";
import linkedin from "../Images/linkedin.svg";
import Image from "next/image";
import footerimg from "../Images/footer-grid.svg";
import { GoRepoForked } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative w-full md:first-letter:mt-40 pb-24"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={footerimg}
          alt="grid"
          layout="fill"
          objectFit="cover"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="md:!leading-[3.5rem] md:text-5xl text-2xl text-center font-semibold lg:max-w-[45vw]">
         Loved This <span className="text-purple">Portfolio?</span> Make This Yours By Forking.
        </h1>
        <p className="text-white-200 md:md:mt-10 mt-12 my-5 text-center">
          Fork This Template On GitHub Start Building Your Own Portfolio
          Website.
        </p>
        <Link href="https://github.com/sanket560/portfolio-nextjs">
          <MagicButton
            title="Fork This Repo"
            icon={<GoRepoForked />}
            position="right"
          />
        </Link>
      </div>

      <div className="relative flex mt-16 md:flex-row flex-col gap-3 justify-between items-center z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sanket Mane
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <Link href="https://github.com/sanket560">
              <Image src={whitegithub} alt="icons" width={30} height={30} />
            </Link>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <Link href="https://www.linkedin.com/in/sanketmane23/">
              <Image src={linkedin} alt="icons" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
