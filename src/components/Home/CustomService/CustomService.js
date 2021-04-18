import React from 'react';
import './CustomService.css'

const CustomService = () => {
    return (
        <div className="container customservice mt-3">
            <div class="wrapper">
	<h1>Subscribe to our Newsletter</h1>
	<p>Receive updates instanly about latest offer</p>
	<div class="newsletter">
		<input type="text" class="input" placeholder="Enter Your Email" />
		<i class="fas fa-envelope"></i>
		<div class="btn">Subscribe</div>
	</div>
</div>
        </div>
    );
};

export default CustomService;