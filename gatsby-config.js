/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sauvetage Bennies Rescue`,
    siteUrl: `https://www.sauvetagebenniesrescue.ca`
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
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Inika`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Risque`, `Montserrat`
      ],
      display: 'swap'
    }
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
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/favicon.png"
    }
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en-US'
    }
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyForNull: 'en',
      useLangKeyLayout: false,
      prefixDefault: true,
    },
  },]
};