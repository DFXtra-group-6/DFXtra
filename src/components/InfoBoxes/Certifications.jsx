// import React from "react";

// const Certifications = ({ certifications }) => {
//   return (
//     <div className="certi-grouped mt-3 border-rounded container bg-white">
//       <h4>Certifications</h4>
//       <div className="row bg-white">
//         <div className="row border bg-light">
//           <div className="icon col">
//             <img
//               src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/260/original/images.png?1679081214"
//               alt="icon"
//               className="icon"
//             />
//           </div>
//           <div className="description col">
//             <p>Python</p>
//           </div>
//         </div>
//         <div className="row border bg-light">
//           <div className="icon col">
//             <img
//               src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/260/original/images.png?1679081214"
//               alt="icon"
//               className="icon"
//             />
//           </div>
//           <div className="description col">
//             <p>javascript</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/certifications`)
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddCertification = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/certifications`, {
        name,
        description,
      })
      .then((response) => {
        setCertifications([...certifications, response.data]);
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
      <h1>Certifications</h1>
      <div className="certifications-container">
        {certifications.map((certification, index) => (
          <button key={index} className="certification-button">
            {certification.name}
          </button>
        ))}
        <button className="add-certification-button">
          + Add Certification
        </button>
      </div>
      {formVisible && (
        <div className="overlay">
          <form className="form" onSubmit={handleAddCertification}>
            <h2>Add Certification</h2>
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

export default Certifications;
