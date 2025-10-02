import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { TypeAnimation } from "react-type-animation";
import Heading from "../components/Heading";
import { FaSignLanguage } from "../components/Icons";
import styles from "./Languages.module.css";

const Languages = () => {
  const data = useStaticQuery(graphql`
    {
      allLanguagesJson {
        edges {
          node {
            id
            text
            translation
            language
          }
        }
      }
    }
  `);

  // Create sequence for TypeAnimation
  const sequence = data.allLanguagesJson.edges.flatMap(({ node }) => [
    () => {
      // This will be rendered as a custom component
    },
    node.text,
    500,
    `${node.text}\n${node.translation}`,
    2000,
    "",
    300,
  ]);

  return (
    <section id="languages">
      <Heading icon={FaSignLanguage} title="Languages" />

      <div className="h-48 md:h-40 lg:h-32 wow fadeIn">
        <TypeAnimation
          sequence={sequence}
          wrapper="div"
          speed={50}
          style={{
            whiteSpace: "pre-line",
            fontSize: "2.25rem",
            paddingBottom: "0.5rem",
          }}
          repeat={Infinity}
          cursor={false}
        />
      </div>

      <div className="mt-1 flex flex-wrap">
        {data.allLanguagesJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className={styles.language}>
              <span>{node.language}</span>
              <span className={styles.divider}>/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
