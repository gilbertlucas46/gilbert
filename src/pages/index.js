import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql,Link } from "gatsby"
import Layout from '../components/layout'
import Scrable from '../components/scrable'
import Button from '../components/button'

import logoFaded from '../images/logo-faded.png'

const HomeWrapper = styled.div`
.logoFaded{
  position: fixed;
  height:518px;
  top:0;
  bottom:0;
  margin:auto;
  right:25%;
}
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
  color: #ffff;
  }
  h2 {
    font-size:1.5rem;
    letter-spacing: 2px;
    font-weight:normal;
    margin: 2rem 0;
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
              ...GatsbyImageSharpFluid
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
            <Button> <Link to={`/contact`}>Contact me</Link></Button>
          </div>
          <img className="logoFaded"
            src={logoFaded}
            alt="Level Up Tutorials Logo"
          />
        </HomeWrapper>
      </>
    )}
  />
  </Layout>
  
)

export default IndexPage
