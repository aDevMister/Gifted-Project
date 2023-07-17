import React from "react";
import './Service.css';
import student from './images/Student.png';
import win from './images/Win.png';
import bag from './images/Money.png'
import {FaArrowRight} from 'react-icons/fa'

const Service = () =>{
    return(
        <div className="box">
            <div className="learn">
                <img src={student} alt="" />
                <h4>Learn</h4>
                <div className="learn-para">
                    <p> you’ll be taught by our experience and qualified teachers, and get update through our website, telegram page and newsletters.</p>
                </div>
                <div className="learn-btn">
                    <button>Learn More
                    <FaArrowRight/>
                    </button>
                </div>
            </div>

            <div className="quiz">
                <img src={win} alt="" />
                <h4>Quiz</h4>
                <div className="quiz-para">
                    <p>Test your intellectual growth and win weekly/monthly prizes respectively.</p>
                </div>
                <div className="quiz-btn">
                    <button>Learn More 
                        <FaArrowRight/>
                    </button>
                </div>
            </div>

            <div className="earn">
                <img src={bag} alt="" />
                <h4>Earn</h4>
                <div className="earn-para">
                    <p>you’ll earn reward by daily incentive, affiliate commission and the quiz you completed.</p>
                </div>
                <div className="earn-btn">
                    <button>Learn More
                    <FaArrowRight/>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Service