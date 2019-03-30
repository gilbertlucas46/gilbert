import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql,Link } from "gatsby"
import Layout from '../components/layout'
import Scrable from '../components/utils/scrable'
import Button from '../components/utils/button'

import Logo from '../components/utils/logo'

const HomeWrapper = styled.div`
  height: 95vh;
  display: flex; /* establish flex container */
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
  align-items: left; 
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
    color: #ffff;
  }
  h2 {
    @media (max-width:767px) {
      line-height:1.8; 
      margin-top:1rem;
      span.im {
        display:none;
      }
    }
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
        <Img fluid={data.file.childImageSharp.fluid} alt="Gilbert's Office Wall"/>
          </div>
          <div className="caption">
            <h1>Hey! I'm <strong>Gilbert</strong></h1>
            <h2><span className="im">I'm a </span><Scrable/></h2>
            <Button> <Link to={`/contact`}>Contact me</Link></Button>
          </div>
          <Logo/>
        </HomeWrapper>
      </>
    )}
  />
  </Layout>
  
)

export default IndexPage
