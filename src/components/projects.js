import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'


const PROJECTS_QUERY = graphql`
   query projects {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: "mywork"}}},sort: {
    order: DESC,
    fields:frontmatter___thumbnail
  }) {
            edges {
                node {
                    frontmatter {
                        title
                        nature
                         thumbnail {
                           childImageSharp {
                            fluid(maxWidth: 680) {
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

const ProjectsList = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default class Projects extends Component {
  render() {
    return (
      <StaticQuery
      query={PROJECTS_QUERY}
      render={({allMarkdownRemark}) => (
          <ProjectsList>
          {allMarkdownRemark.edges.map(edge => (
            <div className="project" key={edge.node.frontmatter.id}>
              <div>
                <div className="caption">
                    <h5>{edge.node.frontmatter.nature}</h5>
                    <h3>{edge.node.frontmatter.title}</h3>
                </div>
              <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
              </div>
            </div>
            ))}  
          </ProjectsList>
      )}
    />
    )
  }
}
  
  
