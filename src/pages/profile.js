import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import { Logo } from '../components/utils/logo'
import Button from '../components/utils/button'

const AboutContent = styled.div`
    max-width:900px;
    height: 114vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    @media (min-width:1440px) {
        width:90%;
    }
    @media (min-width: 768px) {
        height: 95vh;
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
            font-size: 16px;
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

const BackendStack = [
    {
        name: `Python`,
        link: 'https://www.python.org'
    },
    {
        name: `FastAPI`,
        link: 'https://fastapi.tiangolo.com'
    },
    {
        name: `SqlAlchemy`,
        link: 'https://www.sqlalchemy.org'
    },
    {
        name: `GraphQL`,
        link: 'https://graphql.org'
    },
    {
        name: `TypeORM`,
        link: 'https://typeorm.io'
    },
    {
        name: `NestJS`,
        link: 'https://nestjs.com'
    },
    {
        name: `JWT (JSON Web Tokens)`,
        link: 'https://jwt.io'
    },
    {
        name: `PostgreSQL`,
        link: 'https://www.postgresql.org'
    },
    // Add more backend tools as needed
];

const FrontendStack = [
    {
        name: `ReactJS`,
        link: 'https://reactjs.org'
    },
    {
        name: `GatsbyJS`,
        link: 'https://www.gatsbyjs.org'
    },
    {
        name: `NextJS, NextJS 13+`,
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
        name: `Material UI`,
        link: 'https://material-ui.com'
    },
    {
        name: `useForm (React Hook Form)`,
        link: 'https://react-hook-form.com'
    },
    {
        name: `React Testing Library`,
        link: 'https://testing-library.com/docs/react-testing-library/intro/'
    },
    {
        name: `ChartsJS`,
        link: 'https://www.chartjs.org'
    },
    {
        name: `D3JS`,
        link: 'https://d3js.org'
    },
    {
        name: `StripeJS`,
        link: 'https://stripe.com/docs/js'
    },
    {
        name: `Google Places API`,
        link: 'https://developers.google.com/maps/documentation/javascript/places'
    },
    // Add more frontend tools as needed
];

const MachineLearningTools = [
    {
        name: `TensorFlow`,
        link: 'https://www.tensorflow.org'
    },
    {
        name: `PyTorch`,
        link: 'https://pytorch.org'
    },
    {
        name: `Scikit-Learn`,
        link: 'https://scikit-learn.org'
    },
    {
        name: `Keras`,
        link: 'https://keras.io'
    },
    {
        name: `XGBoost`,
        link: 'https://xgboost.ai'
    },
    {
        name: `OpenCV`,
        link: 'https://opencv.org'
    },
    // Add more machine learning tools as needed
];

const DataScienceTools = [
    {
        name: `Jupyter`,
        link: 'https://jupyter.org'
    },
    {
        name: `Pandas`,
        link: 'https://pandas.pydata.org'
    },
    {
        name: `NumPy`,
        link: 'https://numpy.org'
    },
    {
        name: `Matplotlib`,
        link: 'https://matplotlib.org'
    },
    {
        name: `Seaborn`,
        link: 'https://seaborn.pydata.org'
    },
    {
        name: `SciPy`,
        link: 'https://www.scipy.org'
    },
    // Add more data science tools as needed
];

const Profile = ({location}) => (
    <Layout location={location}>
        <AboutContent>
            <h1>About Me</h1>
            <p>Full Stack Web Developer and UI/UX javascript specialist based in the Philippines. With a solid 12 Year experience in web development and UI/UX design. Experienced handling all stages of and following all software guidelines. Troubleshoots glitches, improves on existing software and tests products in real-life situations.</p>
            <Divider/>
            <h4>Backend Stack</h4>
            <div className="specs">
                {BackendStack.map((stack, index) => (
                    <span key={index}>
                        {(index ? ', ' : '')}
                        <a rel="noopener noreferrer" className="link" target="_blank" href={stack.link}>{stack.name}</a>
                    </span>
                ))}
            </div>

            <h4>Frontend Stack</h4>
            <div className="specs">
                {FrontendStack.map((stack, index) => (
                    <span key={index}>
                        {(index ? ', ' : '')}
                        <a rel="noopener noreferrer" className="link" target="_blank" href={stack.link}>{stack.name}</a>
                    </span>
                ))}
            </div>

            <h4>Machine Learning Tools</h4>
            <div className="specs">
                {MachineLearningTools.map((tool, index) => (
                    <span key={index}>
                        {(index ? ', ' : '')}
                        <a rel="noopener noreferrer" className="link" target="_blank" href={tool.link}>{tool.name}</a>
                    </span>
                ))}
            </div>

            <h4>Data Science Tools</h4>
            <div className="specs">
                {DataScienceTools.map((tool, index) => (
                    <span key={index}>
                        {(index ? ', ' : '')}
                        <a rel="noopener noreferrer" className="link" target="_blank" href={tool.link}>{tool.name}</a>
                    </span>
                ))}
            </div>

            <Button>
                <a rel="noopener noreferrer"  target="_blank" href="https://docs.google.com/document/d/1P4BzCnztg8IJjb7e7laq5jRzJlAGhpjND_GDX0X1KTk/edit?usp=sharing"> Download CV</a>
            </Button>
            <Logo/>
        </AboutContent>
    </Layout>
);

export default Profile;