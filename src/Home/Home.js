import React from 'react';
import Reviews from '../Pages/Reviews/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Footer from './Footer';
import Partners from './Partners';
import Request from './Request';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Partners></Partners>
            <Request></Request>
            <Footer></Footer>
        </div>
    );
};

export default Home;