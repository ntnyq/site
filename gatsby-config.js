require('dotenv').config()
const path = require('path')

const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  siteMetadata: {
    title: `ntnyq`,
    description: `ntnyq`,
    author: `ntnyq`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'generated-types/gatsby-graphql.d.ts',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: resolve(`static/data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: resolve(`static/images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ntnyq`,
        short_name: `ntnyq`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: resolve(`static/images/avatar.jpg`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-172996934-1`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
