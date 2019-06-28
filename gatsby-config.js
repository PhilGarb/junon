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
        name: `mainPages`,
        path: `${__dirname}/src/content/mainPages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectSubPages`,
        path: `${__dirname}/src/content/subPages/projekte`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      //TODO Icon is missing
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Junges UNO Netzwerk Deutschland e.V.`,
        short_name: `JUNON`,
        start_url: `/`,
        background_color: `rgb(99, 147, 244)`,
        theme_color: `rgb(99, 147, 244)`,
        display: `minimal-ui`,
        // icon can be specified here
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
