import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/utils/seo/seo"



const Error404 = styled.div`
  height: 95vh;
  display: flex; /* establish flex container */
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
  align-items: left; 
`;

const NotFoundPage = () => (
  <Layout>
    <Error404>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Error404>
  </Layout>
)

export default NotFoundPage
