import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 512, quality: 100, placeholder: BLURRED)
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 128, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div className="col-span-2">
          <div className="max-w-lg mx-auto">
            <GatsbyImage image={getImage(data.photo)} alt="Profile" />
          </div>
        </div>
        <div className="col-span-3">
          <GatsbyImage
            className="max-w-lg max-h-32 mx-auto lg:mx-0"
            image={getImage(data.logo)}
            alt="Logo"
          />

          <h1 className="sr-only">
            Devansh Panirwala&apos;s Resume on the Web <br />
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
