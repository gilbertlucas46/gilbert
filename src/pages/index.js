import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { StaticQuery, graphql } from "gatsby"
import Scrable from '../components/scrable'

const HomeWrapper = styled.div`
  .fixedBG {
    z-index: -1;
    left: 70px;
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    div {
      height: 100vh;
    }
  }
  h1 {
  font-weight:normal;
  letter-spacing: 2px;
  font-size: 3.5rem;
  }
  h2 {
    font-size:1.4rem;
    letter-spacing: 2px;
  }
`;


const IndexPage = ({location}) => (
  <Layout location={location}>
  <StaticQuery
    query={graphql`
      query HomeQuery {
        file(relativePath: {
          regex: "/home-bg/"
        }) {
          childImageSharp {
            fluid(maxWidth:3000){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <HomeWrapper>
        <div className="fixedBG">
        <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="caption">
            <h1>Hey! I'm <strong>Gilbert</strong></h1>
            <h2>I'm a <Scrable/></h2>
          </div>
        </HomeWrapper>
      </>
    )}
  />
  </Layout>
  
)

export default IndexPage
