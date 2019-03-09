import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"

const MainLayout = styled.main`
  max-width:90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  padding-left:70px;
`;

const FooterLayout = styled.footer`
  max-width:90%;
  margin: 0 auto;
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
        <Spring
          from={{ height: location.pathname === '/blog' ? 100 : 200 }}
          to={{ height: location.pathname === '/blog' ? 200 : 100 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        {/*location.pathname === '/' &&
        
        */}
        
        
        <MainLayout>
          <div>
          {children}
          </div>
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
