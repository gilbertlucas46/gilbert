const url = 'https://gilbert.codes';
const title = '12-year Full Stack Developer with expertise in web development, UI/UX design, and machine learning. Eager to contribute unique skills to your team.';
const image = `${url}/static/4b83faf6a00cf68751dd65a0f4d13966/87516/gilbert-lucas.png`;


module.exports = {
  siteMetadata: {
    title,
    defaultTitle: title,
    titleTemplate: '%s · Gilbert Lucas',
    description: `My name is Gilbert Lucas. I'm a 33-year-old Full Stack Developer with a robust 12-year background in web development, UI/UX design, and a comprehensive understanding of machine learning and data science.

    Throughout my career, I have successfully navigated the entire development lifecycle, adhering to best practices and guidelines. My expertise includes troubleshooting, enhancing existing software, and thorough testing of products in real-world scenarios. What sets me apart is my proficiency not only in full-stack development but also in leveraging machine learning and data science to enhance project outcomes. 

    While my professional experiences are all in my CV, I also want to say that my persistence and accountability in finishing tasks and projects entrusted to me are the main reasons why my past companies and clients enjoy working with me.
    `,
    author: `Gilbert Lucas`,
    url: url,
    siteUrl: url,
    image,
    defaultImage: image,
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
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd D MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        locale: 'fr', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      },
    }, 
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
        path: `${__dirname}/src/metadata`,
        name: 'metadata',
      }
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
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "posts" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "metadata" // Must match the source name ^
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
