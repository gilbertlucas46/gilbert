import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'
import Button from '../components/button'

const AboutContent = styled.div`
    width:88%;
    max-width:772px;
    height: 95vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    p {
        font-size: 1.2rem;
        color: #BCB2B2;
        line-height:1.8rem;
    }
    h4 {
        border-color:#BCB2B2;
        font-size:1.5rem;
        font-weight:normal;
        margin-bottom:1rem;
    }
    .specs {
        color: #575454;
        font-weight:normal;
        margin-bottom:1rem;
        font-size:1.2rem;
    }
`;
const Divider = styled.div`
    width:100%;
    height: 2px;
    background-color:#575454;
    margin-bottom:1.45rem;
`;

const Profile = ({location}) => (
    <Layout location={location}>
        <AboutContent>
            <h1>About Us</h1>
            <p>I am a Full Stack Web Developer and UI/UX Javascript specialist based in Philippines.</p>
            <Divider/>
            <h4>Development Stack</h4>
            <div className="specs">ReactJS, GatsbyJS, NextJS, GraphQL, CSSGrid, Netlify, Apollo, Prisma</div>
            <h4>Design tools</h4>
            <div className="specs">Adobe XD, Figma, Adobe Illustrator, Adobe Photoshop</div>
            <Button>
                <a target="_blank" href="https://www.dropbox.com/s/akjqqtnbtxct8gh/Gilbert%20Lucas%20CV%28compressed%29.pdf?dl=0"> Download CV</a>
            </Button>
            <Logo/>
        </AboutContent>
    </Layout>
);
export default Profile