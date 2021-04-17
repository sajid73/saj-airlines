import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://thawing-earth-88805.herokuapp.com/makeadmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <input placeholder="Enter admin email" {...register("email", { required: true })} /> <br/>
      {errors.reviewbyuser && <span style={{color: 'red'}}><i>This field is required</i></span>} <br/>
      
      <input style={{backgroundColor: 'cyan'}} type="submit" />
    </form>
    </div>
  );
};

export default MakeAdmin;
