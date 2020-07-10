const path = require(`path`);
const resolveConfig = require(`tailwindcss/resolveConfig`);
const tailwindConfig = require(`./tailwind.config.js`);
const fullConfig = resolveConfig(tailwindConfig);
require(`dotenv`).config({ path: `.env` });

module.exports = {
  pathPrefix: `/homes/dpanirwa/`,
  siteMetadata: {
    title: `Devansh Panirwala's Resume on the Web`,
    description: `Everyone needs their own little spot on the interwebs, and this is mine. Welcome to my resume, on the web!`,
    author: `Devansh Panirwala`,
    siteUrl: `https://www.cs.purdue.edu/homes/dpanirwa/`,
    gverif: `google-site-verification`,
    gverif_con: `rXZTKLbRIgbXS13zv22C8kvBth78JJu9YiJpC2Nhyf8`,
    alternatesiteUrl: `https://www.devanshpanirwala.ml/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-171598173-1`,
        // Puts tracking script in the head instead of the            body
        head: true,
        // enable ip anonymization
        anonymize: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.cs.purdue.edu/homes/dpanirwa/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.cs.purdue.edu/homes/dpanirwa/`,
        sitemap: `https://www.cs.purdue.edu/homes/dpanirwa/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devansh Panirwala's Resume on the Web`,
        short_name: `Resume on the Web`,
        start_url: `https://www.cs.purdue.edu/homes/dpanirwa/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.white,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:400,600`],
        display: `swap`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
  ],
};
