import '../Experience/experience.css'
import PropTypes from 'prop-types';
import ExperienceModel from "../utils/Experience.model";
import placeholder from './images/placeholder.png'

const Experience = (userExperience) => {
    const { employer, position, startDate, endDate } = userExperience;

    return (
      
        <div className="training-box col-md-12 py-2 ">
           
            <img src={placeholder} alt="placeholder" className="exp-img"></img> 
            <div className="employer"> {employer}</div>
            <div className="position">{position}</div>
            <div className="date">{startDate} - { endDate}</div>
            <div className='blue'>Expand +</div>    
     
        </div>
      
    )
}

    Experience.propTypes = {
    userExperience: PropTypes.instanceOf(ExperienceModel)
 }


export default Experience;