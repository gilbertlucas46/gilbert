import React from 'react';
import Layout from  '../components/layout';
import SEO from "../components/utils/seo/seo"

import { createGlobalStyle } from 'styled-components';
import {Stats} from '../components/events/covid19/Stats';
import CountrySelector from '../components/events/covid19/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Covid19 = ({location}) => {
  return (
    <Layout location={location}>
      <GlobalStyle />
      <SEO title="COVID19" />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </Layout>
  )
}

export default Covid19;