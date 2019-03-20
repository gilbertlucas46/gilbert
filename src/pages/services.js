import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/utils/logo'
import ServicesComponent from '../components/services'


const ServicesContent = styled.div`
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
        margin-bottom:1rem;
    }
`;

const Services = ({location}) => (
    <Layout location={location}>
        <ServicesContent>
            <div>
                <h1>My Services</h1>
                <p>Building small to large web apps with ReactJS, React Native
                GatsbyJS, NextJS. GraphQL.</p>
                <ServicesComponent/>
                <Logo/>
            </div>
        </ServicesContent>
    </Layout>
);
export default Services