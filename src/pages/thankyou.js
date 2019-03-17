import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'

const ThankYou = styled.div`
  
`;

const Contact = ({location}) => (
    <Layout location={location}>
    <ThankYou>
          <div>
            <h1>Thank You!</h1>
            <p>I will get back to you soon...</p>
            <Logo/>
          </div>
        </ThankYou>
    </Layout>
);
export default Contact