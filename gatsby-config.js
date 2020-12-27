require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

const config = require('gatsby-plugin-config');

module.exports = {
    siteMetadata: {
        title: `Blog`,
        description: `Blog About Design`,
        author: `Mariusz Krawczyk`,
      },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-datocms`,
          options: {
            apiToken: process.env.GATSBY_API_TOKEN_DATO,
            preview: false,
            disableLiveReload: false,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `article`,
            path: `${__dirname}/src/data`,
          },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: "gatsby-plugin-react-svg",
          options: {
            rule: {
              include: /images/ // See below to configure properly
            }
          }
        },
        {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            host: 'https://www.blog.com',
            sitemap: 'https://www.blog.com/sitemap.xml',
            policy: [{ userAgent: '*', allow: '/' }]
          }
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            lang: `en`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/icon.png`,
          },
        },
        {
          resolve: `gatsby-plugin-webfonts`,
          options: {
            fonts: {
              google: [
                {
                  family: 'Roboto',
                  variants: ['300', '500', '700'],
                },
                {
                  family: 'Montserrat',
                  variants: ['300', '500', '700'],
                },
              ],
            },
          },
        },
        {
          resolve: `gatsby-plugin-styled-components`,
          options: {
            // Add any options here
          },
        }
    ]
}