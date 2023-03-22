import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./certifications.css";

const Certifications = ({ certifications }) => {
  return (
    <div className="col-3 offset-8 certi-grouped">
      <div className="row">
        <div className="icon col">
          <img src={placeholder} className="icon" />
        </div>
        <div className="description col">
          <p>Python</p>
        </div>
      </div>
      <div className="row">
        <div className="icon col">
          <img src={placeholder} className="icon" />
        </div>
        <div className="description col">
          <p>javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
