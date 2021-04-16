import React from 'react';
import pj from '../../../images/privatejet.jfif'
import bj from '../../../images/businessjet.jfif'
import hs from '../../../images/helicopter.jfif'
import at from '../../../images/air taxi.jfif'
import './Services.css'

const Services = () => {
    return (
        <div className="service-section container">
            <h1>Our Services</h1>
            <div className="justify-content-around row">
            <div className="col-md-3 card-style">
                <h3>Private Jet</h3>
                <img width="250px" height="200px" src={pj} alt=""/>
            </div>
            <div className="col-md-3 card-style">
                <h3>Business Jet</h3>
                <img width="250px" height="200px" src={bj} alt=""/>
            </div>
            <div className="col-md-3 card-style">
                <h3>Helicopter Service</h3>
                <img width="250px" height="200px" src={hs} alt=""/>
            </div>
            <div className="col-md-3 card-style">
                <h3>Air Texi</h3>
                <img width="250px" height="200px" src={at} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default Services;