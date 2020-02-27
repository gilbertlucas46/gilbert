import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from 'styled-components'
import Img from 'gatsby-image'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    max-width: 200px;
    img {
      width:100%;
    }
  }
  
  .read-more {
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      distinct(field: id)
      edges {
        node {
          id
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        {allMarkdownRemark.edges.map(({ node }) => {
          const slug = node.frontmatter.title.split(" ").join("-").toLowerCase();
          return (
            <Post key={node.frontmatter.title}>
              <Link
                to={`/posts/${slug}`}
              >
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
              <p>{node.frontmatter.date}</p>
              <Link
                className="read-more"
                to={`/posts/${slug}`}>
                Read More
              </Link>
            </Post>
          )
        })}
      </>
    )}
  />
);

export default Listing;
