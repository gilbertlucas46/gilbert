import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./Archive"

import "./layout.css"

const MainLayout = styled.main`
  max-width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 200 }}
          to={{ height: location.pathname === '/' ? 200 : 100 }}
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
          <Archive/>
        </MainLayout>
      <FooterLayout>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </FooterLayout>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
