import { Button, Card } from '@material-ui/core';
import React from 'react';
import './Destinations.css';
import tokyo from '../../../images/tokyo.jpg'
import lasvegas from '../../../images/lasvegas.jpg'
import dubai from '../../../images/dubai.jpg'


const Destinations = () => {
    return (
        <div className= "container container-div mt-5 mb-5">
            <h1>Our Destinations</h1>
            <div className="row justify-content-around">
                <div className="col-md-4 card-style">
                    <h1>Las Vegas</h1>
                    <img src={lasvegas} width="200px" height="150px" alt=""/>
                    <a href="https://en.wikipedia.org/wiki/Las_Vegas" rel="noopener noreferrer" target="_blank"><Button className="m-2" variant="contained" color="primary">Explore more</Button></a>
                </div>
                <div className="col-md-4 card-style">
                    <h1>Dubai</h1>
                    <img src={dubai} width="200px" height="150px" alt=""/>
                    <a href="https://en.wikipedia.org/wiki/Dubai" rel="noopener noreferrer" target="_blank"><Button className="m-2" variant="contained" color="primary">Explore more</Button></a>
                </div>
                <div className="col-md-4 card-style">
                    <h1>Tokyo</h1>
                    <img src={tokyo} width="200px" height="150px" alt=""/>
                    <a href="https://en.wikipedia.org/wiki/Tokyo" rel="noopener noreferrer" target="_blank"><Button className="m-2" variant="contained" color="primary">Explore more</Button></a>
                </div>
            </div>
        </div>
    );
};

export default Destinations;