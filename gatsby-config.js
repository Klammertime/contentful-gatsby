require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Audrey Klammer`,
    author: {
      name: `Audrey Klammer`,
      summary: `I am passionate about web development and building useful things.`,
    },
    twitterUsername: '@klammertime',
    image: ``,
    heading: `My name is Audrey Klammer. I'm a UI Engineer based in San Francisco.`,
    description: `My name is Audrey Klammer. I'm a UI Engineer based in San Francisco.`,
    siteUrl: `https://audreyklammer.com`,
    social: [
      {
        label: `Twitter`,
        url: `https://twitter.com/Klammertime`,
      },
      {
        label: `Github`,
        url: `https://github.com/Klammertime`,
      },
      {
        label: `LinkedIn`,
        url: `https://www.linkedin.com/in/audreyklammer/`,
      },
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    'gatsby-plugin-styled-components',
    'postcss-styled-components',
    `gatsby-plugin-postcss`,
    {
      resolve: 'stylelint-color-format',
      rules: {
        'color-format/format': {
          format: 'rgb',
        },
      },
    },
    {
      resolve: 'stylelint-css-modules',
      rules: {
        'css-modules/composed-class-names': true,
        'css-modules/css-variables': [true, {}],
      },
    },
    {
      resolve: 'stylelint-declaration-block-no-ignored-properties',
      rules: {
        'plugin/declaration-block-no-ignored-properties': true,
      },
    },
  ],
}
