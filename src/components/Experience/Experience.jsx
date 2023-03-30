import '../Experience/experience.css'
// import PropTypes from 'prop-types';
// import ExperienceModel from "../utils/Experience.model";
import placeholder from './images/placeholder.png'
import { useState } from 'react';

const Experience = (userExperience) => {
    const { employer, position, dates, skills } = userExperience;
    const [open, setOPen] = useState(false);
    
    const toggle = () => {
        setOPen(!open);
    };

    return (
      <>
        <div className="training-box col-md-12 py-2 ">
           
            <img src={placeholder} alt="placeholder" className="exp-img"></img> 
            <div className="employer">{employer}</div>
            <div className="position">{position}</div>
            <div className="date">{dates}</div>
            <div>
                <button onClick={toggle} className="expand-btn">Expand +</button>   
            </div> 
             
        </div>
        <div className="skills-box">
                {open && (
                    <>
                        <div className="toggle">
                            <div>{skills}</div>
                        </div>  
                    </>
                )}
        </div>
        </>
      
    )
}

//     Experience.propTypes = {
//     userExperience: PropTypes.instanceOf(ExperienceModel)
//  }

export default Experience;