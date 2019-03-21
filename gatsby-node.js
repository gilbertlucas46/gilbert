const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/components/postLayout.js`)
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }    
      `).then(results => {
        results.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
            path: `/posts${node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
              slug: node.frontmatter.slug,
            }
          });
        })
        resolve();
      })
    });
  }

  exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
  };