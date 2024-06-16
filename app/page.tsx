import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
         <Toaster />
         <Hero/>
         <Education/>
         <Project/>
         <Experience/>
         <Skills/>
         <Contact/>
         <Footer />
      </div>
    </main>
  );
}
