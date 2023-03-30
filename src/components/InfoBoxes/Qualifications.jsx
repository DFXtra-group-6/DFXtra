import React, { useState, useEffect } from "react";
import axios from "axios";

function Qualifications({data}) { // added props
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const qualifications = data.qualifications;

// You should be doing a GET request here, the data has already been requests on ProfilePage
  /*useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/qualifications`)
      .then((response) => {
        setQualifications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  const handleAddQualification = (event) => {
    event.preventDefault();
    // Doesn't need to make request, there is an API in async folder for this
    /*axios
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
      }); */
  };
  
  const populate = () => {

        const display = qualifications.map(qualification => {

            return (
                <div>
                    <div className='bg-white'>
                        <div className="row  border bg-light">
                            <div className='icon col'>
                                <img src={placeholder} className='icon' alt='place-holder' />
                            </div>
                            <div className='description col-8'>
                                <p>{qualification.level} | {qualification.description}</p>
                                <p>{qualification.institution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return display;
    }

  return (
    <div>
      <h1>Qualifications</h1>
      <div className="qualifications-container">
        {populate()}
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
