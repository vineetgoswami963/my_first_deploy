import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Particle from "@/components/particle";
import styles from './page.module.scss'
import React from 'react';
import Projectss from '@/components/projectss';
import Earth from "@/components/earth";
import Header from "@/components/header";


// const Earth = dynamic(() => import('@/components/earth'), {
//   ssr: false,
//   // loading: () => <img src=""></img>
// })


export default function Home() {
  return (
    <div>
      
      {/* <Particle/> */}
    {/* <SmoothScroll> */}
      <main className={styles.main}>
      <Particle/>
      <Header />
        <Earth />
        <Projectss />
      </main>



    <main className="flex flex-col items-center px-4">
      

      
      <Intro />
      
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      
      {/* <Experience /> */}
      <Contact />
    </main>
    {/* </SmoothScroll> */}
    </div>
  );
}
