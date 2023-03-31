import React, { useState } from "react";
import { submitProfileData } from "../../async/profileAPICalls";
// import placeholder from "./images/certificate.svg";
import "./Qualifications.css";

const Qualifications = ({ data }) => {
  // added props
  const [formVisible, setFormVisible] = useState(false);
  const [level, setLevel] = useState("");
  const [institution, setInstitution] = useState("");
  const [description, setDescription] = useState("");

  const qualifications = data;

  const user = JSON.parse(localStorage.getItem("user"));
  console.dir(user);

  const submitButton = () => {
    submitProfileData({
      data: {
        qualifications: {
          level: level,
          institution: institution,
          description: description,
        },
      },
      id: user._id,
    });
  };

  const populate = () => {
    if (qualifications.length <= 0) {
      return (
        <>
          <div className="text-center border m-4 bg-light">
            "No qualifications added"
          </div>
        </>
      );
    }

    const display = qualifications.map((qualification) => {
      return (
        <div>
          <div className="bg-white">
            <div className="row  border bg-light">
              <div className="icon col">
                <i class="fa fa-certificate" aria-hidden="true"></i>
              </div>
              <div className="description col-8">
                <p>
                  {qualification.level} | {qualification.description}
                </p>
                <p>{qualification.institution}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return display;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid rgb(222, 226, 230)",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <h1 className="Qualifications-h1">Qualifications</h1>

      <i
        className="fa fa-light fa-plus"
        onClick={() => setFormVisible(!formVisible)}
      ></i>
      <div className="qualifications-container">
        {populate()}
        {/* <button className="add-qualification-button">
          + Add Qualification
        </button> */}
      </div>
      {formVisible && (
        <div className="overlay">
          <form className="form" onSubmit={submitButton}>
            <h2>Add Qualification</h2>
            <label>
              Level:
              <input
                className="form-control"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
              />
            </label>
            <label>
              Institution:
              <input
                className="form-control"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                value={institution}
                onChange={(event) => setInstitution(event.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <div className="form-buttons">
              <button className="btn btn-info" type="submit">
                Add
              </button>
              <button
                className="btn btn-light"
                type="button"
                onClick={() => setFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Qualifications;
