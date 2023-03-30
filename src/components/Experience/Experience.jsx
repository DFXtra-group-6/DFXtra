import '../Experience/experience.css'
// import PropTypes from 'prop-types';
// import ExperienceModel from "../utils/Experience.model";
import placeholder from './images/placeholder.png'
import { useState } from 'react';
import EditExperienceForm from './EditExpForm';

const Experience = ({ employer, position, dates, skills, onEdit }) => {
    // const { employer, position, dates, skills } = userExperience;
    const [open, setOPen] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    
    const toggle = () => {
        setOPen(!open);
    };

    const toggleEditForm = () => {
        setEditFormOpen(true);
        onEdit();
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
                {/* <button onClick={toggleEditForm}>Edit</button> */}
                <i className="fa fa-light fa-pencil" onClick={toggleEditForm}></i>
             
        </div>
        <div className="skills-box">
                {open && (
                    <>
                        <div className="toggle">
                            <div>skills: {skills}</div>
                        </div>  
                    </>
                )}
            </div>
             {editFormOpen && (
            <EditExperienceForm
                experience={{ employer, position, dates, skills }}
                onClose={() => setEditFormOpen(false)}
        />
      )}
        </>
      
    )
}

//     Experience.propTypes = {
//     userExperience: PropTypes.instanceOf(ExperienceModel)
//  }

export default Experience;