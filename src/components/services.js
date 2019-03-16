import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SERVICES_QUERY = graphql`
   query Services {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: "services"}}},sort: {
    order: DESC,
    fields:frontmatter___thumbnail
  }) {
            edges {
                node {
                    frontmatter {
                        categories
                        title
                         thumbnail {
                           childImageSharp {
                            fluid(maxWidth: 680) {
                              ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                          }
                      }
                    }
                }
            }
        }
    }
`;

const ServiceList = styled.div`
  max-width:680px;
  .slick-next{
    right:20px;
    z-index:99;
  }
  .slick-dots {
   bottom: -35px;
   text-align:left;
  }
  .slick-active{
    button{
      &:before {
        color:#BCB2B2 !important;
      }
    }
  }
  .slick-prev {
    left: 20px;
    z-index:99;
  }
  .slick-dots {
    li {
      button {
        &:before {
          font-size:18px;
        }
      }
    }
  }
  .slide {
    position:relative;
    margin-bottom:3rem;
    h3 {
      position: absolute;
      z-index:99;
      height: 3rem;
      background-color: #292929;
      text-align:center;
      width:100%;
      bottom:-2.9rem;
      margin:0;
      line-height:3rem;
      font-size:1rem;
      letter-spacing:1px;
    }
  }
`;

export default class ServicesComponent extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <StaticQuery
      query={SERVICES_QUERY}
      render={({allMarkdownRemark}) => (
          <ServiceList>
            <Slider {...settings} >
            {allMarkdownRemark.edges.map(edge => (
              <div key={edge.node.frontmatter.title}>
                <div className="slide">
                <h3>{edge.node.frontmatter.title}</h3>
                <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
                </div>
              </div>
              ))}
            </Slider>
          
          </ServiceList>
      )}
    />
    )
  }
}
  
  
