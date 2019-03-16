import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from './layout';


const SERVICES_QUERY = graphql`
  query Services {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: "services"}}}) {
            edges {
                node {
                    frontmatter {
                        categories
                        title
                    }
                }
            }
        }
    }
`;

const ServiceList = styled.ul`
  padding:0;
  margin:0;
  list-style:none; 
  a {
    font-size: 0.8rem;
    text-decoration:underline;
    color: #524763;
  }
`;

const ServicesComponent = () => (
    <StaticQuery
      query={SERVICES_QUERY}
      render={({allMarkdownRemark}) => (
        <>
          <div>
              <ServiceList>
              {allMarkdownRemark.edges.map(edge => (
                  <li key={edge.node.frontmatter.title}>
                    {edge.node.frontmatter.title}
                  </li>
              ))}
              </ServiceList>
          </div>
        </>
      )}
    />
  )
  
  export default ServicesComponent
  
