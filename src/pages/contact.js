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
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>name: <input type="text" name="name" /></label>
            </p>
            <p>
                <button>Send</button>
            </p>
            </form>
            <Logo/>
          </div>
        </ContactContent>
    </Layout>
);
export default Contact