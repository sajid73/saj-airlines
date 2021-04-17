import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    
    fetch('https://thawing-earth-88805.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => {
        setReviews(data);
    })

    return (
        <div className="container">
            <h1>Testimonials</h1>
            <div className="row justify-content-around">
                {
                    reviews.map(review => <div className="col-md-4 review-card">
                        <div className="d-flex flex-row m-2">
                        <img className="review-img" src={review.photoURL} alt=""/><h4 className="m-3">{review.displayName}</h4>
                        </div>
                        <p><i><q>{review.reviewbyuser}</q></i></p>
                    </div>  
                    )
                }
                
            </div>
            <Link style={{textDecoration: 'none'}} to="/dashboard"><Button variant="contained" color="secondary">Write a review</Button></Link>
        </div>
    );
};

export default Reviews;