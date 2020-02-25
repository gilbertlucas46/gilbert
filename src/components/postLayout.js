import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class postLayout extends Component {
  render() {
    const {allMarkdownRemark} = this.props.data;
    const { location } = this.props;
    return (
      <Layout location={location}>
      {allMarkdownRemark.edges.map(nodes => {
        return (
          <h1>{nodes.node.frontmatter.title}</h1>
        )
      })}
      </Layout>
    )
  }
}


export const query = graphql`
   query PostQuery($slug: String!) {
     allMarkdownRemark(filter: {
      frontmatter:  { title: { eq:$slug}
      }}){
    edges{
      node{
        frontmatter {
          title
        }
      }
    }
  }
}`;
