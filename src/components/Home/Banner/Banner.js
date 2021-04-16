import React from 'react';
import './Banner.css'
import { Button } from '@material-ui/core';

const Banner = () => {
    return (
        <div className="banner-section img-fluid p-3">
            <container className="row">
            <div className="col-md-6 p-3">
                <div className="booking">
                    <h2>Book a flight</h2>
                    <input type="text" className="form-control input-box" placeholder="Flying from airport . . . " /> 
                    <input type="text" className="form-control input-box" placeholder="Flying to airport . . . " /> 
                    <label>Departure Date</label>
                    <input type="date" className="form-control input-box" name="departure" id=""/>
                    <label>Arrival Date</label>
                    <input type="date" className="form-control input-box" name="arrival" id=""/>
                    <Button variant="contained" color="primary">Search</Button>
                </div>
                </div>
            </container>
        </div>
    );
};

export default Banner;