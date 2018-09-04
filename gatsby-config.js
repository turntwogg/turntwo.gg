module.exports = {
  siteMetadata: {
    title: 'TurnTwo',
  },
  pathPrefix: '/turntwo.gg',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:300,400,700', 'Roboto Mono:400,700'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TurnTwo',
        short_name: 'TurnTwo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/fav.jpg', // This path is relative to the root of the site.
      },
    },
  ],
}
