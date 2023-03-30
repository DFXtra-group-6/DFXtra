import React, { useState } from 'react';

const EditExperienceForm = ({ experience, onClose }) => {
  const [employer, setEmployer] = useState(experience.employer);
  const [position, setPosition] = useState(experience.position);
  const [dates, setDates] = useState(experience.dates);
  const [skills, setSkills] = useState(experience.skills);

  const handleSubmit = (event) => {
      event.preventDefault();
      
    // TODO: Update the experience details in the database
    onClose();
  };

  return (
    <div>
        <h2>Edit Experience</h2>
        <form onSubmit={handleSubmit}>
              
        <label htmlFor='emp'>Employer:</label>
        <input
            id='emp'
            type="text"
            value={employer}
            onChange={(event) => setEmployer(event.target.value)}
        />
        
        <label htmlFor='pos'>Position:</label>
        <input
            id='pos'
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
        />  
              
        <label htmlFor='dates'>Dates:</label>
            <input
                type="text"
                id='dates'
                value={dates}
                onChange={(event) => setDates(event.target.value)}
        />
              
        <label htmlFor='skills'>Skills:</label>
            <input
                id='skills'
                type="text"
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
            />
        
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditExperienceForm;  


