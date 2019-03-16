import React from 'react';
import Layout from  '../components/layout';
import Projects from '../components/projects'

const Portfolio = ({location}) => (
    <Layout location={location}>
        <Projects/>
    </Layout>
);
export default Portfolio