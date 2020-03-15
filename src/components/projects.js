import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

const PROJECTS_QUERY = graphql`
  query projects {
  allMarkdownRemark(filter: {frontmatter: {categories: {eq: "mywork"}}},sort: {
    order: DESC,
    fields:frontmatter___title
  }) {
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

const ProjectsList = styled.div`
  display: grid;
  @media (min-width:1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width:768px) and (max-width:1199px) {
    grid-template-columns: 1fr 1fr;
  }
  .project {
    figure {
    position: relative;
    overflow: hidden;
    text-align: center;
    margin-bottom:0;
    cursor: pointer;
    img {
      margin-bottom:0;
    }
  
    &:hover {
      .caption {
        color: #fff;
        -webkit-transform: translate3d(0,-50%,0) translate3d(0,-3rem,0);
        transform: translate3d(0,-50%,0) translate3d(0,-3rem,0);
      }
      figcaption{
        height: 100%;
        &:before {
          opacity: 1;
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
      }
      .info {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }
    }
    
      figcaption {
        position:absolute;
        z-index: 9;
        bottom: 0;
        text-align:left;
        height:100%;
        width:100%;
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
          background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
          content: '';
          opacity: 0;
          -webkit-transform: translate3d(0,50%,0);
          transform: translate3d(0,50%,0);
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
        }
        h2,h3 {
          margin:0;
          color:#fff;
          letter-spacing:1px;
        }
        h3 {
          font-size:1rem;
          font-weight:normal;
          margin-bottom:15px;
        }
        h2 {
          font-size:2rem;
          font-family: 'Miriam Libre';
          font-weight: bold;
        }
        .info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          -webkit-transform: translate3d(0,10px,0);
          transform: translate3d(0,10px,0);
          padding: 0 3rem;
          max-height: 2.4rem;
          min-height: 2rem;
          overflow:hidden;
          p {
            margin-bottom:0;
            align-self: auto; 
            font-size: 0.8rem;
            line-height: 1.2rem;
            color: #fff;
            a {
              color: #ED2654;
              text-decoration:none;
              font-weight:bold;
              text-shadow:1px 1px 2px rgba(0, 0, 0, 0.57);
            }
          }

        }
        .caption {
          position: absolute;
          padding:3rem;
          top: 70%;
          left: 0;
          width: 100%;
          color: #484c61;
          -webkit-transition: -webkit-transform 0.35s, color 0.35s;
          transition: transform 0.35s, color 0.35s;
          -webkit-transform: translate3d(0,-50%,0);
          transform: translate3d(0,-50%,0);
        }
      }
    }
    figure.effect-romeo {
      &:before{
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #484c6180;
          position: absolute;
          top: 0;
          z-index: 9;
      }
    }
  } 
`;

export default class Projects extends Component {
  render() {
    return (
      <StaticQuery
      query={PROJECTS_QUERY}
      render={({allMarkdownRemark}) => (
          <ProjectsList>
          {allMarkdownRemark.edges.map(edge => (
            <div className="project" key={edge.node.frontmatter.title}>
            <figure className="effect-romeo">
              <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
              <figcaption>
                <div className="caption">
                <h3>{edge.node.frontmatter.nature}</h3>
                <h2>{edge.node.frontmatter.title}</h2>
                <div className="info" dangerouslySetInnerHTML={{
                  __html: edge.node.html
                }}/>
                </div>
              </figcaption>			
            </figure>
            </div>
            ))}  
          </ProjectsList>
      )}
    />
    )
  }
}
  
  
