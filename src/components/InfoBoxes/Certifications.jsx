<<<<<<< HEAD
import React from "react";
import placeHolder from "./images/certificate.svg";
import "./certifications.css";

const Certifications = ({ data }) => {
  const certifications = data.certifications;

  const populate = () => {
    const display = certifications.map((certification, index) => {
      return (
        <div key={index} className="bg-white">
          <div className="row border bg-light">
            <div className="icon col">
              <img src={placeHolder} alt="icon" className="icon" />
            </div>
            <div className="description col">
              <p>{certification}</p>
            </div>
          </div>
        </div>
      );
    });
    return display;
  };

  return (
    <div className="certi-grouped mt-3 border-rounded container bg-white">
      <h4>Certifications</h4>
      {populate()}
    </div>
  );
};
=======
import React, { useState } from "react";
import placeHolder from './images/certificate.svg';
import { submitProfileData } from "../../async/profileAPICalls";
import './certifications.css';

const Certifications = ({ data }) => {

    const certifications = data.certifications;

    const user = JSON.parse(localStorage.getItem('user'));

    const [formVisible, setFormVisible] = useState(false);
    const [description, setDescription] = useState("");

    const handleAddCertification = (event) => {
        event.preventDefault();
        submitProfileData({ data: { certifications: description }, id: user._id })
    };

    const populate = () => {
        if (certifications.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No certifications added"
                    </div>
                </>
            );
        }
        const display = certifications.map((certification, index) => {
            return (
                <div key={index} className="bg-white">
                    <div className="row border bg-light">
                        <div className="icon col">
                            <img
                                src={placeHolder}
                                alt="icon"
                                className="icon"
                            />
                        </div>
                        <div className="description col">
                            <p>{certification}</p>
                        </div>
                    </div>
                </div>)
        })
        return display;
    }

    return (
        <div>
            <h1>Certifications</h1>
            <div className="certifications-container">
                {populate()}
                <button className="add-certification-button" onClick={() => setFormVisible(!formVisible)}>
                    + Add Certification
                </button>
            </div>
            {formVisible && (
                <div className="overlay">
                    <form className="form" onSubmit={handleAddCertification}>
                        <h2>Add Certification</h2>
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
>>>>>>> 3f4295d93e6c515fd893d9c3cd5f17d2f7272017

export default Certifications;
