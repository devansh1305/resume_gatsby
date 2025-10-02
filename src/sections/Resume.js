import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, IoIosDocument } from "../components/Icons";

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume/preview.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-2">
          <a
            href="https://shogun_dev/resume-pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              image={getImage(data.file)}
              alt="Resume Preview"
              imgStyle={{ objectPosition: "top" }}
            />
            <span className="sr-only">Download Resume</span>
          </a>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="text-lg lg:text-xl font-semibold">
            You can download the PDF version here:
          </h5>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Resume"
            onClick={() =>
              window.open("https://shogun_dev/resume-pdf", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
