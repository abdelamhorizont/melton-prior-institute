// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbywordpresshomepage.gatsbyjs.io/",
    title: "Gatsby WordPress Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with WordPress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://wordpress.meltonpriorinstitut.org/graphql",
        type: {
          MediaItem: {
            // exclude: true,
            localFile: {
              requestConcurrency: 5
              // maxFileSizeBytes: 1
            }
          },
          // Post: {
          //   limit:
          //     process.env.NODE_ENV === `development`
          //       ? // Lets just pull fewer posts in development to make it easy on ourselves.
          //         24
          //       : // and we don't actually need more than 100 in production for this particular site
          //         100
          // }
        },
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        production: {
          allow404Images: true
        }
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          placeholder: `dominantColor`,
        },
        // Set to false to allow builds to continue on image errors
        failOnError: false,
        // deprecated options and their defaults:
        base64Width: 20,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-vanilla-extract",
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "Gatsby Starter WordPress Homepage",
    //     short_name: "Gatsby",
    //     start_url: "/",
    //     // These can be imported once ESM support lands
    //     background_color: "#ffffff",
    //     theme_color: "#004ca3",
    //     icon: "src/favicon.png",
    //   },
    // },
  ],
}
