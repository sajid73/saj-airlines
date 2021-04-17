import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    fetch('https://thawing-earth-88805.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
        setServices(data);
    })
    return (
        <div className="service-section container">
            <h1>Our Services</h1>
            <div className="justify-content-around row">
               {
                   services.map(service => <div className="col-md-3 card-style">
                       <h3>{service.title}</h3>
                       <img src={service.imgURL} width="250px" height="200" alt=""/>
                       <div className="justify-content-around row mt-3">
                           <span className="col-md-6 mt-1">${service.price}</span>
                           <Button size="small" className="col-md-6" variant="contained">Book now</Button>
                       </div>
                       </div>
                       )
               }
            </div>
        </div>
    );
};

export default Services;