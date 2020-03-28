import React from 'react'
import Layout from  '../components/layout';
import ContactForm from '../components/utils/contact-form'
import styled from 'styled-components'


const ContactPage = styled.div`
  max-width:772px; 
  padding: 5rem 0;
  p {

  }
`;

const Contact = ({location}) => (
  <Layout location={location}>
    <ContactPage>
    <h1>Contact Me</h1>
    <p>Let’s build something together! Or <a href="mailto:lucas@gilbert.codes?Subject=Hi Gilbert!" target="_top">email</a> me if you have
    any other questions.</p>
    <ContactForm/>
    </ContactPage>
  </Layout>
);
export default Contact
