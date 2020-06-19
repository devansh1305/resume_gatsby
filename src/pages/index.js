import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Philanthropy from "../sections/Philanthropy";
import Projects from "../sections/Projects";
//import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <Skills />
        <Projects />
        <Languages />
        <Philanthropy />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
