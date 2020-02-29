import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';
import styled from 'styled-components'
import Img from 'gatsby-image'

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export const BlogContainer = styled.div`
  max-width: 900px;
  .info {
    margin-top: 2rem;
  }
`;

export const BlogTitle = styled.h1`
    position: relative;
    padding-bottom: 2rem;
    &:after {
      content: '';
      position: absolute;
      height: 6px;
      bottom: 0;
      width: 100%;
      background-color: #171717;
      left: 0;
    }
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
            <BlogTitle>{edge.node.frontmatter.title}</BlogTitle>
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
