import React from 'react';
import Layout from  '../components/layout';
import Listing from '../components/listing'
const Blog = ({location}) => (
    <Layout location={location}>
    <h1>My Wall</h1>
        <Listing />
    </Layout>
);
export default Blog