import React from "react";
import './Product.css';
import Upleft from './images/Group 51.png';
import Upright from './images/Group 50.png';
import Downleft from './images/Group 48.png';
import Downright from './images/Group 49.png';

const Product = () => {
    return(
        <div className="wrap">
            <div className="how">
                <h2>How it works</h2>
            </div>
            <div className="upper">
                <div className="left-img">
                    <img src={Upleft} alt="" />
                    <div className="left-para">
                        <p>nigerians and other african countries can come and challenge one another. </p>
                    </div>
                    <div className="break">
                        <p>in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in uSDT.</p>
                    </div>
                </div>
                <div className="right-img">
                    <img src={Upright} alt="" />
                    <div className="right-para">
                        <p>you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on.</p>
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="left-png">
                    <img src={Downleft} alt="" />
                    <div className="left-txt">
                        <p>you will participate in intellectual contest for a life changing prize. you have the chance to join our innovative and creative team.</p>
                    </div>
                </div>
                <div className="right-png">
                    <img src={Downright} alt="" />
                    <div className="right-txt">
                        <p>you enjoy steady affiliate earnings. refer your friends and earn 40% affiliate commision.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product