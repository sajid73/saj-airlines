import React from 'react';
import './Checkout.css'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Checkout = () => {
    const {serviceid} = useParams();
    const [service, setService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newBooking = {...data, service: service.title}
        console.log(newBooking)
    };

    const url = 'https://thawing-earth-88805.herokuapp.com/services/' + serviceid;
    fetch( url )
    .then(res => res.json())
    .then(data => setService(data))

    return (
        <div className="row container">
            <div className="col-md-6 paymentCard">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Your Name: </span>
                    <Input defaultValue={loggedInUser.displayName} {...register("name", { required: true })} /> <br/>
                    {errors.name && <span>This field is required</span>} <br/>

                    <span>Your email: </span>
                    <Input defaultValue={loggedInUser.email}  {...register("email", { required: true })} /> <br/>
                    {errors.email && <span>This field is required</span>} <br/>
                    
                    {
                        service.title && <div>
                            <span>Service catagory: </span>
                    <TextField disabled id="standard-disabled" label="Catagory" defaultValue={service.title} /> <br/>
                    <input className="payment-button" type="submit" />
                        </div>
                    }
    
    </form>
            </div>
        </div>
    );
};

export default Checkout;