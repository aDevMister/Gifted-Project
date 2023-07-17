import React from "react";
import './Hero.css'
import image from './images/slide.png'

const Hero = () =>{
    return(
        <div className="wrapper">
            <div className="hero-pg">
                <h1>we breed and reward intellectuals</h1>
                <p>earn and learn unlimitedly as a memeber...</p>
                <div className="getting-started">
                <button>Getting Started</button>
                </div>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
export default Hero