import React from "react";
import './SignIn.css'
import sii from './images/Gifted-Brainz-PNG.png'
import google from './images/google.png'
import {BsArrowLeft} from 'react-icons/bs'
const SignIn = () =>{
    return(
        <div className='sign-in-box'>
            <div className="sign-in-img">
                <img src={sii} alt="" />
                <h3>Sign In</h3>
            </div>
            <div className="sign-in-wrap">
                <div className='sign-in-input'>
                    <label htmlFor="">enter your email</label>
                    <input type="text" placeholder='' />
                </div>
                <div className='sign-in-input'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='' />
                </div>
                <div className="sign-in-check">
                    <input type="checkbox" />
                    <p>
                        remember me
                    </p>
                </div>
                <div className="sign-in-btn">
                    <div className="btn-sign-in">
                        <button>Sign in</button>
                    </div>
                    <p>OR</p>
                    <div className="google-icon-in">
                        <img src={google} alt="" />
                    </div>
                </div>
                <div className="register-in">
                    <p>
                        don't have an account?
                    </p>
                    <a href="#">click here.....</a>
                </div>
                
            </div>
            <footer className='sign-in-foot'>
                <div className="back-arrow">
                    <h4><BsArrowLeft/> Back to home</h4>
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
export default SignIn