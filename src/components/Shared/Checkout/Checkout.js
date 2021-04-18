import React from 'react';
import './Checkout.css'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input, TextField } from '@material-ui/core';
import {Elements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IeFe8E22xzNhJJeUrlWM1WXWQ7qupIChF3NHOWvoKLlGyMCxmtzjYJdR4y6fh1mHa9f1S2mQUeqpiKybWYuA6jD000qhJr9Ie');

const Checkout = () => {
    const {serviceid} = useParams();
    const [service, setService] = useState({})
    const [bookingData, setBookingData] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setBookingData(data)
    };

    const handlePayment = (paymentId) => {
        const newBooking = {...bookingData,
            service: service.title,
            paymentId,
            status: 'Pending'
        }
        console.log(newBooking)
        fetch('https://thawing-earth-88805.herokuapp.com/addBooking',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
    }

    const url = 'https://thawing-earth-88805.herokuapp.com/services/' + serviceid;
    fetch( url )
    .then(res => res.json())
    .then(data => setService(data))

    return (
        <div className="row">
            <div className="col-md-3">
                <Dashboard></Dashboard>
            </div>
            <div className="col-md-6 paymentCard">
                <div style={{display: bookingData ? 'none' : 'block'}}>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <span>Your Name: </span>
                    <Input placeholder={loggedInUser.displayName} {...register("name", { required: true })} /> <br/> <br/>
                    <span>Your email: </span>
                    <Input placeholder={loggedInUser.email} {...register("email", { required: true })} /> <br/><br/>
                    {
                        service.title && <div>
                            <span>Service catagory: </span>
                    <TextField disabled id="standard-disabled" label="Catagory" defaultValue={service.title} /> <br/>
                    <p>You need to pay ${service.price}</p>
                    <input className="payment-button" type="submit" /><br/>
                        </div>
                    }
                </form>
                </div>
                <div style={{display: bookingData ? 'block' : 'none', width: '400px', margin: 'auto', marginTop: '150px'}}>
                <Elements stripe={stripePromise}>
                    <PaymentCard handlePayment={handlePayment}></PaymentCard>
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Checkout;