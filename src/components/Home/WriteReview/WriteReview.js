import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard';
import './WriteReview.css'

const WriteReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const reviewbody = {...data, displayName: loggedInUser.displayName, photoURL : loggedInUser.photoURL}
        fetch('https://thawing-earth-88805.herokuapp.com/addReviews',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(reviewbody)
        })
    };
    return (
        <div className="row">
            <div className="col-md-4">
                <Dashboard></Dashboard>
            </div>
            <div className="col-md-5">
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <input className="input-field" placeholder="Share your experience" {...register("reviewbyuser", { required: true })} /> <br/>
      {errors.reviewbyuser && <span style={{color: 'red'}}><i>This field is required</i></span>} <br/>
      
      <input className="input-field" style={{backgroundColor: 'darkorange'}} type="submit" />
    </form>
            </div>
        </div>
    );
};

export default WriteReview;