import React from "react";
import './Courses.css'
import {AiFillPlusCircle} from 'react-icons/ai'

const Courses = () => {
    return(
        <div className="courses">
            <div className="available">
                <h2>Available Courses</h2>
            </div>
            <div className="envelope">
                <div className="left-co">
                    <div className="ux">
                        <h4>1. UI/UX Design
                        </h4>
                        <p> you’ll be taught by our experience and qualified teachers, and get update through our website, telegram page and newsletters.</p>
                    </div>
                    <div className="ux">
                        <h4>2. backend web development 
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>3. front-end web development
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>4. page management
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>5. advance cryptocurrency
                        </h4>
                    </div>

                </div>
                <div className="right-co">
                    <div className="ux">
                        <h4>6. graphics design
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>7. african health and herb methodology
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>8. true africa history
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>9. skin care production  
                        </h4>
                    </div>
                    <div className="ux">
                        <h4>10. deFi & nFTs 
                       
                        </h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Courses