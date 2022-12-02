require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'delete',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_URI,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
