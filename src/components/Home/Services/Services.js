import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Services.css'

const Services = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);
    fetch('https://thawing-earth-88805.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
        setServices(data);
    })
    const handleCheckout = (serviceid) => {
        history.push(`/services/${serviceid}`)
    }
    return (
        <div className="service-section container">
            <h1>Our Services</h1>
            <div className="justify-content-around row">
               {
                   services.map(service => <div className="col-md-3 card-style">
                       <h3>{service.title}</h3>
                       <img className="img-animation" src={service.imgURL} alt=""/>
                       <div className="justify-content-around row mt-3">
                           <span className="col-md-6 mt-1">${service.price}</span>
                           <Button onClick={() => handleCheckout(service._id)} size="small" className="col-md-6" variant="contained">Book now</Button>
                       </div>
                       </div>
                       )
               }
            </div>
        </div>
    );
};

export default Services;