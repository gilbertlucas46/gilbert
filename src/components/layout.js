import React from "react"
import PropTypes from "prop-types"
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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
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
