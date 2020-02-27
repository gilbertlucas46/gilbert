import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';
import styled from 'styled-components'
import Img from 'gatsby-image'

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

const BlogContainer = styled.div`

`;

export default class postLayout extends Component {
  render() {
    const {allMarkdownRemark} = this.props.data;
    const { location } = this.props;
    return (
      <Layout location={location}>
      {allMarkdownRemark.edges.map(edge => {
        return (
          <BlogContainer>
            <h1>{edge.node.frontmatter.title}</h1>
            <div className="info" dangerouslySetInnerHTML={{
              __html: edge.node.html
            }}/>
          </BlogContainer>
        )
      })}
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    allMarkdownRemark(
       filter: { frontmatter:  { title: { eq:$slug}
      }}) {
      edges {
        node {
          frontmatter {
            title
            nature
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
