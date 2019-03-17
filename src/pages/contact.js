import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'

const ContactContent = styled.div`
    max-width:772px;
    height: 95vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    @media (min-width:1440px) {
        width:88%;
    }
    p {
        font-size: 1.2rem;
        color: #BCB2B2;
        line-height:2rem;
    }
    h4 {
        border-color:#BCB2B2;
        font-size:1.5rem;
        font-weight:normal;
    }
`;



const Contact = ({location}) => (
    <Layout location={location}>
    <ContactContent>
          <div>
            <h1>Contact Me</h1>
            <p>Let’s build something together! Or <a href="mailto:lucas@gilbert.codes?Subject=Hi Gilbert!" target="_top">email</a> email me if you have
            any other questions.</p>
            <form name="contact" method="POST" data-netlify="true" action="/thankyou">
            <p>
                <label>Email: <input type="text" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
            <Logo/>
          </div>
        </ContactContent>
    </Layout>
);
export default Contact