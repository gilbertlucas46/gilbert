const url = 'https://gilbert.codes';

module.exports = {
  siteMetadata: {
    title: `Gilbert Lucas  · FullStack Developer and UI/UX Javascript Specialist`,
    titleTemplate: '%s · Gilbert Lucas',
    description: `My name is Gilbert Lucas. I'm a 28-year-old web developer from Philippines with an interest in pretty much everything web! I mainly write JavaScript at present, I also do web design, but I'm up for learning pretty much anything!`,
    author: `Gilbert Lucas`,
    url: url,
    siteUrl: url,
    image: `/src/images/gilbert-lucas.png`,
    owner: 'Gilbertlucas',
    twitterUsername: '@gilbertlucas14',
    facebookAppID: '',
    menuLinks:[
        {
          name:'home',
          link:'/'
        },
        {
          name:'profile',
          link:'/profile'
        },
        {
          name:'services',
          link:'/services'
        },
        {
          name:'portfolio',
          link:'/portfolio'
        },
        {
          name:'contact',
          link:'/contact'
        },
        {
          name:'blog',
          link:'/blog'
        }
      ],
      socialChannels: [
        {
          name:"linkedin",
          link: "https://www.linkedin.com/in/gilbertlucas"
        },
        {
          name:"github",
          link: "https://github.com/gilbertlucas46"
        }
      ]
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: { 
        name: `Gilbert Lucas`,
        short_name: `gilbert`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gilbert-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/services`,
        name: 'services',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/myworks`,
        name: 'myworks',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "media" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure your color here
        color: '#ED2654',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['lessbold', 'lesslight', 'lessregular', 'gilbert']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137503033-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "gilbert.codes",
        name:"thankyou",
        cookieName: "gilbertcodes"
      },
    },
  ],
}
