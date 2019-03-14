import React from "react"
import { Spring } from 'react-spring/renderprops'
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"

import "./layout.css"
import "./less-font.css"

const MainLayout = styled.main`
  max-width:100%;
  padding-top:2rem;
  height:100vh;
  h1 {
    color:#ED2654;
    font-weight:normal;
    letter-spacing: 2px;
    font-size: 3.5rem;
    @media (max-width: 767px) {
      font-size: 2.5rem;
      line-height:3.8rem;
    }
  }
  h2 {
    font-size:1.5rem;
    letter-spacing: 2px;
    font-weight:normal;
    margin: 2rem 0;
    @media (max-width: 767px) {
      font-size:1.2rem;
      line-height:1.8rem;
      margin: 1rem 0;
    }
  }
  .contents{
    @media (min-width: 1440px) {
    padding-left:8%;
    }
    @media (max-width: 1399px) {
      padding-left:100px;
      padding-right:20px;
    }
  }
  .portfolio {
    padding-left:70px;
  }
  
`;



const Layout = ({ children,location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks{
              name
              link
            }
            socialChannels{
              name
              link
            }
          }
        }
        file(relativePath: {
          regex: "/bg/"
        }) {
          childImageSharp {
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}  socialChannels={data.site.siteMetadata.socialChannels} />
        <MainLayout>
          <Spring
          delay={300}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          >
          {({opacity}) =>(
            <div style={{opacity}}
            className={location.pathname === '/portfolio' ? 'portfolio' : 'contents' }>
              {children}
            </div>
          )}
          </Spring>
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
