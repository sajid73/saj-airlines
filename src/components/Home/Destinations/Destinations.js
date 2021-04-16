import { Card } from '@material-ui/core';
import React from 'react';
import './Destinations.css';

const places = [
    {
        place: 'Las Vegas',
        img: './../../../images/lasvegas.jpg'
    },
    {
        place: 'Dubai',
        img: './../../../images/dubai.jpg'
    },
    {
        place: 'Tokyo',
        img: './../../../images/tokyo.jpg'
    }
]

const Destinations = () => {
    return (
        <div className= "container container-div">
            <h1>Our Destinations</h1>
            <div className="row justify-content-around">
            {
                places.map(place => 
                    <div className="col-md-4 card-style">
                        <Card>
                            <h1>{place.place}</h1>
                        </Card>
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default Destinations;