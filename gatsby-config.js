module.exports = {
  siteMetadata: {
    title: 'delete',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint:
          'https://api-us-west-2.graphcms.com/v2/ckpixja8ea36y01z6hs9b25zy/master',
      },
    },
  ],
};
