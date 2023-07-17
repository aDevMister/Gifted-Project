import React from "react";
import "./Features.css"
import FeatureProps from "./FeatureProps";
import fast from "./images/withdraw.png"
import spin from "./images/spin.png"
import icon from "./images/red.png"
import dot from "./images/dot1.png"
const Features = () =>{
    return(
        <div className="features-main">
            <div className="benefits">
                <FeatureProps
                head = "features & benefits"
                />
            </div>
           <div className="wrap-it">
                <div className="left-side">
                    <FeatureProps
                    image = {fast}
                    head = "fast Withdrawal"
                    paragraph ="we pay within 10-24hrs to your specific bank account."
                />
             </div>
                <div className="middle">
                    <FeatureProps
                    image = {spin}
                    head = "Spin and Win"
                    paragraph = "win amazing price by simply spinning the wheel."
                    />
                </div>
                <div className="right-side">
                    <FeatureProps
                    image = {icon}
                    head = "referrals is not compulsory"
                    />
                </div>
            
           </div>

        </div>
    )
}
export default Features;