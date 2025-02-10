import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import WorkExperience from "@/Components/WorkExperience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import ContactMe from "@/Components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import Img from '../Img/profile img.jpg';


    const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-[#eb5e28]/80'>
      <Head>
        <title>Mahmoud's Portfolio</title>
      </Head>


        {/* Header */}
        <Header />


        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>


        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>


        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>


        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>


        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <ContactMe />
          </section>

  
          {/* Footer */}
          <Link href={"#hero"}>
              <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                          <Image className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src={Img}  alt="profile img"/>
                    </div>
              </footer>
          </Link>
    </div>
  );
}

export default Home;
