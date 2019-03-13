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
  grid-gap: 40px;
  display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    align-items: left; 
    height:100vh;
    .contents {
      max-height:90vh;
      overflow:auto;
      padding: 30px 0;
    }
  @media (min-width: 1440px) {
    padding-left:8%;
  }
  @media (max-width: 1399px) {
    padding-left:90px;
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
            <div style={{opacity}} className="contents">
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
