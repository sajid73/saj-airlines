import React, { useState } from 'react';
import '../Dashboard.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Dashboard from '../Dashboard';

const AddServices = () => {
    const [service, setService ]=useState({});
    const [imgavl, setImgavl] = useState(false);
    const [imgurl, setimgurl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleChange = e =>{
        const imginfo = new FormData();
        imginfo.set('key', 'ac20e1a136467136bdc171029a510ed8')
        imginfo.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        imginfo)
        .then(res => {
            console.log(res.data.data.url)
            setimgurl(res.data.data.url)
            setImgavl(true)
        })
        .catch(err => console.log(err))
    }
    const onSubmit = data => {
        const newservice = {...data, imgURL: imgurl}
        setService(newservice)
        fetch('https://thawing-earth-88805.herokuapp.com/addServices',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newservice)
        })
    };
    return (
        <div className="row">
            <div className="col-md-4">
            <Dashboard></Dashboard>
        </div>
        <div className="col-md-5 ms-5 ps-5">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding: '10px'}}>
            <b>Service Title: </b>
            <input type="text" {...register("title", { required: true })} /> <br/>
            {errors.title && <span className="error">This field is required</span>}
            </div>
  
            <div style={{padding: '10px'}}>
            <b>Enter service price/hour: </b>
            <input type="number" {...register("price", { required: true })} /><br/>
            {errors.price && <span className="error">This field is required</span>}
            </div>
            
            <div style={{padding: '10px'}}>
            <b>Upload image of service: </b>
            <input type="file" onChange={handleChange} /><br/>
            {errors.image && <span className="error">This field is required</span>}
            </div>
            {
                !imgurl && <span className="waiting">Submit button will availble after receiving image url</span>
            }

            {
                imgurl && <input style={{padding: '5px', backgroundColor: 'yellow', borderRadius: '8px'}} type="submit" />
            }
</form>
    </div>
        </div>
    );
};

export default AddServices;