import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Specialties } from "@/components/sections/Specialties";
import { TechStack } from "@/components/sections/TechStack";
import { VisualPlayground } from "@/components/sections/VisualPlayground";
import { WorkProcess } from "@/components/sections/WorkProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <TechStack />
      <Projects />
      <Experience />
      <WorkProcess />
      <FAQ />
      <VisualPlayground />
      <Contact />
    </>
  );
}
