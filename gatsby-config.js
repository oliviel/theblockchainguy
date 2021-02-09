require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'A blockchain blog by Holiviel Valdez',
    titleTemplate: '%s - Theblockchainguy',
    description:
      'I am Holiviel Valdez a developer advocate working on the never ending journey of documenting and learning about blockchain development.',
    siteUrl: 'https://www.theblockchainguy.dev',
    image: './src/images/solidity-background.jpg',
    twitterUsername: '@holiviel_en',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACK_ID,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 3000,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Theblockchainguy',
        short_name: 'Theblockchainguy',
        start_url: '/',
        background_color: '#93c5fd',
        theme_color: '#93c5fd',
        display: 'standalone',
        icon: `src/images/ether-favicon.png`,
        icon_options: {
          purpose: 'maskable',
        },
      },
    },
    'gatsby-plugin-offline',
  ],
};
