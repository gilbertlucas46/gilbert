import React from "react"
import { Spring } from 'react-spring/renderprops'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"
import SEO from '../components/utils/seo/seo'

import "./utils/layout.css"
import "./utils/less-font.css"

import SEOImage from '../images/gilbert-lucas.png'

const MainLayout = styled.main`
  max-width:100%;
  padding-top:2rem;
  height:100vh;
  a {
    color:#ED2654;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
  h1 {
    color:#ED2654;
    font-weight:normal;
    letter-spacing: 2px;
    font-size: 3.5rem;
    @media (min-width:376px) and (max-width:767px) {
        line-height:1.5;
        margin-bottom: 0;
    }
    @media (max-width:375px) {
      font-size: 2.5rem;
      line-height:1.5;
      margin-bottom: 0;
  }
  }
  
  h2 {
    font-size:1.5rem;
    letter-spacing: 2px;
    font-weight:normal;
    margin: 2rem 0;
  }
  .contents{
    @media (min-width: 1440px) {
    padding-left:8%;
    }
    @media (max-width: 1439px) {
      padding-left:90px;
      padding-right:20px;
    }
  }
  .portfolio {
    padding-left:70px;
    margin-top: -2rem;
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
        <SEO
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          image={ SEOImage }
          pathname={location.pathname}
        />
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
