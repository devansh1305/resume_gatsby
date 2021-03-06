import { graphql, useStaticQuery } from "gatsby";
//import GatsbyImage from "gatsby-image";
import selfie_boy from '../images/about-me/selfie-boy.gif'
import React from "react";
import Heading from "../components/Heading";
import { MdPerson } from "../components/Icons";

const AboutMe = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     photo: file(relativePath: { eq: "about-me/selfie-boy.gif" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 512, quality:100, webpQuality: 90) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
  //       html
  //     }
  //   }
  // `);
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <section id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        {/* <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div> */}
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <img src={selfie_boy} alt="Thats me!" />
        </div>
        <div
          className="text-justify lg:col-span-4 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
