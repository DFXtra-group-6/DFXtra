import '../Experience/experience.css'
import PropTypes from 'prop-types';
import ExperienceModel from "../utils/Experience.model";

const Experience = (userExperience) => {
    const { employer, position, startDate, endDate } = userExperience;

    return (
        
        <tr className="table-row">
           
            <img src="src/components/Experience/images/placeholder.png" alt="placeholder"></img> 
            <td> {employer}</td>
            <td>{position}</td>
            <td>{startDate} - { endDate}</td>
            <td className='blue'>Expand + </td>    
     
        </tr>
      
    )
}

    Experience.propTypes = {
    userExperience: PropTypes.instanceOf(ExperienceModel)
 }


export default Experience;