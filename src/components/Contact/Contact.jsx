import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
      <div className='left'>
        <span>BE IN TOUCH WITH US:</span>
      </div>
      <div className='center'>
        <input placeholder='Enter Your Email' type='email'/>
        <button>Join us</button>
      </div>
      <div className='right'>
        <div className='icons'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <PinterestIcon/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
