/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `benniesrescue`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/files/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "oHHPclMqccBUTGME9MwqMAc_Nvjq1oXZXj07jBCkFoY",
      "spaceId": "5nixl2k7fr71",
    downloadLocal: true,
    }
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: 'en',
      langKeyForNull: 'en',
      prefixDefault: false,
      useLangKeyLayout: false,
    },
  },]
};