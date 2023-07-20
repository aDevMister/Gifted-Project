import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-head">
                <h2>join our newsletter</h2>
            </div>
            <div className="footer-in">
                <input type="text" placeholder="hello@smartquiz.com"/> 
                <button>Join Now</button>
            </div>
            
            <div className="list-items">
                <ul className="product">
                   <h1>Product</h1>
                    <li>Course</li>
                    <li>Quiz</li>
                    <li>Refer Program</li>
                    <li>Spin Rewards</li>
                </ul>
                <ul className="product">
                    <h1 className="abt">About</h1>
                    <li>what we do</li>
                    <li>our mission</li>
                    <li>contact us</li>
                    <li>FAQ</li>
                    <li>privacy  & policy</li>
                </ul>
                <ul className="product">
                    <h1>Resources</h1>
                    <li>Docs</li>
                    <li>careers</li>
                    <li>blog</li>
                </ul>
            </div>
            <div className="reserved">
                <p>
                © 2022 Copyright By aDevMister. All Right Reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer