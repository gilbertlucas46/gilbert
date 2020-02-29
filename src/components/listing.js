import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from 'styled-components'
import Img from 'gatsby-image'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: hsla(0, 0%, 0%, 0.12);
  margin-top: 2rem;
  width: calc(100% - 2%);
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  p {
    font-size: 0.8rem;
    color: gray;
  }
  .date {
    margin-top: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: #bcb2b2;
    margin-top: 0;
    
  }
  .gatsby-image-wrapper {
    max-width: 500px;
    img {
      width:100%;
    }
  }
  a {
    &:hover {
        text-decoration:none;
    }
  }
  
  .read-more {
    font-size: 1rem;
    text-decoration: underline;
    color: #ed2654;
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
            date(formatString: "MMMM Do, YYYY, h:mm a")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500) {
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
          const title = node.frontmatter.title.substring(0,50)+"..."
          return (
            <Post key={node.frontmatter.title}>
              <Link
                to={`/posts/${slug}`}
              >
                <h2>{title}</h2>
              <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
              <p className="date">{node.frontmatter.date}</p>
              </Link>
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
