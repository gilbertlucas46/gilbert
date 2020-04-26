import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import { Logo } from '../components/utils/logo'
import Button from '../components/utils/button'

const AboutContent = styled.div`
    max-width:900px;
    height: 95vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    @media (min-width:1440px) {
        width:90%;
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
        margin-bottom: 1rem
    }
    .specs {
        color: #575454;
        font-weight:normal;
        margin-bottom:1rem;
        font-size:1.2rem;
        line-height:1.7rem;
        a.link {
            color: #575454;
            &:hover {
                text-decoration:none;
                color: #ED2654;
            }
        }
    }
    /* Bob */
    @-webkit-keyframes link {
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @keyframes link {
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @-webkit-keyframes link-float {
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @keyframes link-float {
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    .link {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .link:hover, .link:focus, .link:active {
    -webkit-animation-name: link-float, link;
    animation-name: link-float, link;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
    
    }
`;
const Divider = styled.div`
    width:100%;
    height: 2px;
    background-color:#575454;
    margin-bottom:1.45rem;
`;

const DevStack = [
    {
        name: `ReactJS`,
        link: 'https://reactjs.org'
    },
    {
        name: `GatsbyJS`,
        link: 'https://www.gatsbyjs.org'
    },
    {
        name: `NextJS`,
        link: 'https://nextjs.org'
    },
    {
        name: `GraphQL`,
        link: 'https://graphql.org'
    },
    {
        name: `CSSGrid`,
        link: 'https://learncssgrid.com'
    },
    {
        name: `Styled-Components`,
        link: 'https://www.styled-components.com'
    },
    {
        name: `Netlify`,
        link: 'https://www.netlify.com'
    },
    {
        name: `Apollo`,
        link: 'https://www.apollographql.com/docs/apollo-server/'
    },
    {
        name: `ExpressJS`,
        link: 'https://expressjs.com'
    },
    {
        name: `Mongodb`,
        link: 'https://www.mongodb.com'
    },
    {
        name: `NetlifyCMS`,
        link: 'https://www.netlifycms.org'
    },
    {
        name: `Strapi`,
        link: 'https://strapi.io'
    },
];
const DesignStack =[
    {
        name: `Adobe XD`,
        link: 'https://www.adobe.com/products/xd.html'
    },
    {
        name: `Figma`,
        link: 'https://www.figma.com'
    },
    {
        name: `Adobe Illustrator`,
        link: 'https://www.adobe.com/products/illustrator.html'
    },
    {
        name: `Adobe Photoshop`,
        link: 'https://www.adobe.com/products/photoshop.html'
    },
]
const Profile = ({location}) => (
    <Layout location={location}>
        <AboutContent>
            <h1>About Me</h1>
            <p>I am a Full Stack Web Developer and UI/UX Javascript specialist based in Philippines.</p>
            <Divider/>
            <h4>Development Stack</h4>
            <div className="specs">
            {DevStack.map((stack,index) => (
                <span key={index}>
                {(index ? ', ' : '')}
                <a rel="noopener noreferrer" className="link" target="_blank" href={stack.link}>{stack.name}
                </a> 
                </span>
            ))}
            </div>
            <h4>Design tools</h4>
            <div className="specs">
            {DesignStack.map((stack,index) => (
                <span key={index}>
                    {(index ? ', ' : '')}
                    <a rel="noopener noreferrer" className="link" target="_blank" href={stack.link}>{stack.name}</a>
                </span>  
            ))}
            </div>
            <Button>
                <a rel="noopener noreferrer"  target="_blank" href="https://www.dropbox.com/s/aeik9qqtl4ok7lp/Gilbert%20Lucas%20CV%28compressed%29.pdf?dl=0"> Download CV</a>
            </Button>
            <Logo/>
        </AboutContent>
    </Layout>
);
export default Profile