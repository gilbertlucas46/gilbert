import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';


export default class services extends Component {
  render() {
    return (
      <Layout>
        lorem   
      </Layout>
    )
  }
}

 export const query = graphql`
  query services {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: "services"}}}) {
        edges {
        node {
            frontmatter {
            categories
            thumbnail
            }
        }
        }
    }
    }
`;