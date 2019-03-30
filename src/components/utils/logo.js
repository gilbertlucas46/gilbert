import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const MyLogo = styled.div`
    position: fixed;
    height:518px;
    top:0;
    bottom:0;
    margin:auto;
    right:15%;
    z-index:-1;
    max-width:400px;
    width:400px;
`;


const Logo = ()=> (
    <StaticQuery query={graphql`
    query siteLogo {
        file(relativePath: {regex: "/logo-faded/"}) {
            childImageSharp {
            fluid(maxWidth: 700,quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
            }
            }
        }
        }

    `}
    render={data => (
        <>
        <MyLogo>
        <Img fluid={data.file.childImageSharp.fluid} alt="Gilbert's Logo"/>
        </MyLogo>
        </>
    )}
    />
  )
  export default Logo
  
