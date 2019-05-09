/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `JUNON`,
    longTitle: `Junges UNO Netzwerk Deutschland e.V.`,
    description: `Die offizielle Webseite des Jungen UNO Netzwerk Deutschland e.V.`,
    author: `@philippgarbowsky`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon can be specified here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
