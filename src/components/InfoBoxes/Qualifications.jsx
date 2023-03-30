// import React from 'react'

// const Qualifications = ({ qualifications }) => {
//     return (
//         <div>
//             {qualifications.map(qualification => {
//                 return (
//                     <div className='col-6'>
//                         <div className='icon col-2'>
//                             <img src='./certificate.svg' className='icon' alt='place-holder' />
//                         </div>
//                         <div className='description col-10'>
//                             <p>{qualification.name} | {qualification.description}</p>
//                             <p>{qualification.institution}</p>
//                         </div>
//                     </div>
//                 )
//             })

//             }
//         </div>
//     )
// }

// export default Qualifications

import React, { useState, useEffect } from "react";
import axios from "axios";

function Qualifications() {
  const [qualifications, setQualifications] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/qualifications`)
      .then((response) => {
        setQualifications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddQualification = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/qualifications`, {
        name,
        description,
      })
      .then((response) => {
        setQualifications([...qualifications, response.data]);
        setFormVisible(false);
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Qualifications</h1>
      <div className="qualifications-container">
        {qualifications.map((qualification, index) => (
          <button key={index} className="qualification-button">
            {qualification.name}
          </button>
        ))}
        <button className="add-qualification-button">
          + Add Qualification
        </button>
      </div>
      {formVisible && (
        <div className="overlay">
          <form className="form" onSubmit={handleAddQualification}>
            <h2>Add Qualification</h2>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <div className="form-buttons">
              <button type="submit">Add</button>
              <button type="button" onClick={() => setFormVisible(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Qualifications;
