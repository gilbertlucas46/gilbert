import React from 'react';
import { Spring } from "react-spring/renderprops";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import SEO from "../components/utils/seo/seo";

import "./utils/layout.css";
import "./utils/miriam-font.css";

const MainLayout = styled.main`
  max-width: 100%;
  padding-top: 2rem;
  height: 100vh;
  overflow-x: hidden;
  a {
    color: #ed2654;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  h1,h2 {
    color: #ed2654;
    font-weight: normal;
  }
  h1 {
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 3.5rem;
    @media (min-width: 376px) and (max-width: 767px) {
      line-height: 1.5;
      margin-bottom: 0;
    }
    @media (max-width: 375px) {
      font-size: 2.5rem;
      line-height: 1.5;
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin: 2rem 0;
  }
  .contents {
    @media (min-width: 1440px) {
      padding-left: 8%;
    }
    @media (max-width: 1439px) {
      padding-left: 90px;
      padding-right: 20px;
    }
  }
  .portfolio {
    padding-left: 70px;
    margin-top: -2rem;
  }
`;

const SEO_QUERY = graphql`
  query SEO_QUERY {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(metadata)/.*.md$/"}}
  ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            metadata {
              metatitle
              metadesc
              image {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
            menuLinks {
              name
              link
            }
            socialChannels {
              name
              link
            }
          }
        }
      }
    }
  }
`;

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={SEO_QUERY}
      render={({ allMarkdownRemark }) => (
        <>
          {allMarkdownRemark.edges.map((edge) => {
            const { frontmatter } = edge.node;
            const imageSource = frontmatter.metadata.map(img => img.image.childImageSharp.fluid.src);
            return (
              <div key={location.pathname}>
                <Header
                  siteTitle={frontmatter.metadata.metatitle}
                  menuLinks={frontmatter.menuLinks}
                  socialChannels={frontmatter.socialChannels}
                />
                <MainLayout>
                  <SEO
                    title={frontmatter.metadata.metatitle}
                    description={frontmatter.metadata.metadesc}
                    image={imageSource[0]}
                    pathname={location.pathname}
                    keywords={[
                      `gatsby`,
                      `application`,
                      `react`,
                      `apollo`,
                      `graphql`,
                      `prisma`,
                      `netlify`,
                      `netlifycms`,
                      `cssgrid`,
                      `sass`,
                      `styled-components`,
                      `wordpress`,
                      `javascript`,
                      `es6`,
                      `nextjs`,
                      `stripe`,
                      `adobe-xd`,
                      `figma`,
                      `sketch`,
                      `web design`,
                      `frontend`,
                      `backend`,
                      `fullstack`,
                      `freelance`,
                      `fulltime`,
                      `seo`,
                      `cloudinary`,
                      `nasa`,
                      `ui/ux specialist`,
                      `npmjs`,
                      `angular`,
                      `react native`,
                      `ionic`,
                      `vue`,
                      `firebase`,
                      `github`,
                      `node`,
                      `gulp`,
                      `webpack`,
                      `graphql yoga`,
                      `heroku`,
                      `now`,
                      `graphic design`,
                      `website design`,
                      `website builder`,
                      `ecommerce website`,
                      `website creator`,
                      `responsive web design`,
                      `web development company`,
                      `best website design`,
                      `build a website`,
                      `web design inspiration`,
                      `SEO Friendly Website`,
                      `headless wordpress`,
                      `server less`,
                      `static site`,
                      `site generator`,
                      `animations`,
                      `typescript`,
                      `json`,
                      `api`,
                      `css`,
                      `jamstack`,
                      `blog`,
                      `html`,
                      `vuejs`,
                      `javascript specialist`
                    ]}
                  />
  
                  <Spring delay={300} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {({ opacity }) => (
                      <div
                        style={{ opacity }}
                        className={
                          location.pathname === "/portfolio" ? "portfolio" : "contents"
                        }
                      >
                        {children}
                      </div>
                    )}
                  </Spring>
                </MainLayout>
              </div>
            )
          })}
        </>
      )}
    />
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
};
Layout.defaultProps = {
  location: {}
};

export default Layout;