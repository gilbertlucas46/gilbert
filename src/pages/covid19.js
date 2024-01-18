import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import SEO from '../components/utils/seo/seo';
import {Stats} from '../components/events/covid19/Stats';
import CountrySelector from '../components/events/covid19/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const CovidContainer = styled.div`
  @media (min-width: 992px) {
    padding-right: 3%;
  }
`;

const Covid19 = ({location}) => {
  return (
    <CovidContainer>
      <Layout location={location}>
        <GlobalStyle />
        <Stats url="https://disease.sh/v3/covid-19/all"></Stats>
        <CountrySelector></CountrySelector>
      </Layout>
      <SEO
        title={`Coronavirus (Live update)`}
        description="Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, and death toll by country due to the COVID 19 coronavirus from Wuhan, China. Coronavirus counter with new cases, updates"
        image="https://disease.sh/v3/covid-19/all"
        pathname='/covid19'
        keywords={[
          `corona virus`,
          `Wuhan China`,
          `Covid19`,
          `novel coronavirus COVID-19`,
          `Wuhan Coronavirus`,
          `COVID-19 CORONAVIRUS PANDEMIC`,
        ]}
      />
    </CovidContainer>
  )
}

export default Covid19;