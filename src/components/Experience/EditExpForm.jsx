import React, { useState } from 'react';
import '../Experience/experience.css'

import { submitProfileData } from "../../async/profileAPICalls";

const EditExperienceForm = ({ experience, onClose }) => {
  const [employer, setEmployer] = useState(null);
  const [position, setPosition] = useState(null);
  const [dates, setDates] = useState(null);
  const [skills, setSkills] = useState(null);

    const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = (event) => {
      event.preventDefault();

      submitProfileData({ data: { experience: { employer: employer, position: position, dates: dates, skills: skills } }, id: user._id });

     onClose();
  };

  return (
    <div className='EditExpForm'>
      <header>
        <h3>Add Experience</h3>
        
      </header>
        <form onSubmit={handleSubmit}>
              
        <label htmlFor='emp'>Employer:</label>
        <input
            id='emp'
            type="text"
            value={employer}
            onChange={(event) => setEmployer(event.target.value)}
        /> <br/><br/>       
        <label htmlFor='pos'>Position:</label>
        <input
            id='pos'
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
        /><br/><br/>
              
        <label htmlFor='dates'>Dates:</label>
            <input
                type="text"
                id='dates'
                value={dates}
                onChange={(event) => setDates(event.target.value)}
        /><br/><br/>
              
        <label htmlFor='skills'>Skills:</label>
            <input
                id='skills'
                type="text"
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
            /><br/><br/>
        
              <button type="submit" className="save-button">Save</button>
              
        <button type="cancel-button" className="cancel-button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditExperienceForm;  


