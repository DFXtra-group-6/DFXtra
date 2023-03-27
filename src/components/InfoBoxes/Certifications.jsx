import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="certi-grouped mt-3 border-rounded container bg-white">
      <h4>Certifications</h4>
      <div className="row bg-white">
        <div className="row border bg-light">
          <div className="icon col">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/260/original/images.png?1679081214"
              alt="icon"
              className="icon"
            />
          </div>
          <div className="description col">
            <p>Python</p>
          </div>
        </div>
        <div className="row border bg-light">
          <div className="icon col">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/260/original/images.png?1679081214"
              alt="icon"
              className="icon"
            />
          </div>
          <div className="description col">
            <p>javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
