import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="home-div">
            <Banner></Banner>
            <Services></Services>
            <Destinations></Destinations>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;