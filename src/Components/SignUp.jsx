import React from 'react';
import "./SignUp.css";
import sui from './images/Gifted-Brainz-PNG.png'
import google from './images/google.png'
import {BsArrowLeft} from 'react-icons/bs'

function SignUp() {
  return (
    <div className='sign-up-box'>
        <div className="sign-up-img">
            <img src={sui} alt="" />
            <h3>Sign Up</h3>
        </div>
        <div className="sign-up-wrap">
            <div className='sign-up-input'>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='' />
            </div>
            <div className='sign-up-input'>
                <label htmlFor="">Enter Your Email</label>
                <input type="text" placeholder='' />
            </div>
            <div className='sign-up-input'>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='' />
            </div>
            <div className="sign-up-check">
                <input type="checkbox" />
                <p>
                    i have agree to the <a href="#">terms & conditions</a> and the <a href="#">privacy & policy</a> of this website.
                </p>
            </div>
            <div className="sign-up-btn">
                <div className="btn-sign-up">
                    <button>Sign Up</button>
                </div>
                <p>OR</p>
                <div className="google-icon">
                    <img src={google} alt="" />
                </div>
            </div>
            <div className="register-up">
                <p>
                    already have an account?
                </p>
                <a href="#">click here.....</a>
            </div>
            
        </div>
        <footer className='sign-up-foot'>
            <div className="back-arrow">
                <h4><BsArrowLeft/> Back</h4>
            </div>
            <div className="privacy-policy">
                <h4>privacy & policy</h4>
            </div>
            <div className="terms-condition">
                <h4>Terms & Condition</h4>
            </div>
       </footer>
        
    </div>
  )
}

export default SignUp