import React, { useState } from "react";
import './Header.css';
 import { Link } from "react-router-dom";
import Logo from './images/Gifted-Brainz-PNG.png'
const Header = () =>{
   const[Click, setClick]  = useState(false)
   const Handleclick = () =>{
    setClick(!Click)
   }
    return(
        <div className="main">
            <nav>
                <div className="Icon">
                    <img src={Logo} alt="" />
                </div>
                <ul className="menuBar">
                    <li><a href="#">Course</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">About Us</a></li>
                    <Link to={"/signup"}><button className="sign-up">Sign Up</button></Link>
                </ul>
                <div className="togin">
                <button onClick={Handleclick} className="toggle"> ☰ </button>
                </div>
            </nav>
            <div className={Click? "mobile-sub":"mobileBar"}>
                <a href="#">Course</a>
                <a href="#">Career</a>
                <a href="#">About Us</a>
                <div className="mobile-btn">
                   <Link to={"/signup"} >
                   <button>Sign Up</button>
                   </Link>
                </div>
            </div>
        </div>
    )
}
export default Header;