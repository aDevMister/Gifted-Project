import React from "react";
import './Play.css'
import winner from "./images/winner.png"
import gifted from "./images/Gifted-Brainz-PNG.png"
import fb from "./images/Fb.png"
import bird from "./images/twitter.png"
import ghost from "./images/Frame.png"
import gram from "./images/telegram.png"


const Play = () =>{
    return(
        <div className="play-bg">
            <div className="play-box">
                <div className="left-sec">
                
                    <div className="play-para">
                        <h1>
                        take quiz and earn  points
                        </h1>
                        <p>
                            win and earn points to purchase course and acquire more skills from the experts.
                        </p>
                    </div>
                    <div className="play-btn">
                        <button>Play Now</button>
                    </div>
                </div>
                <div className="right-sec">
                    <img src={winner} alt="" />
                </div>
            </div>
            <div className="play-icons">
                <div className="gifted-logo">
                <img src={gifted} alt="" />
                </div>
                <div className="socials">
                <img src={fb} alt="" />
                <img src={bird} alt="" />
                <img src={ghost} alt="" />
                <img src={gram} alt="" />
                </div>
            </div>
            
        </div>
    )
}
export default Play