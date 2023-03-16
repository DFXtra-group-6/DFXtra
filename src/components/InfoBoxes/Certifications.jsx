import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="col-6">
      {certifications.map((certification) => {
        return (
          <>
            <div className="icon col-2">
              <img src="./certificate.svg" className="icon" />
            </div>
            <div className="description col-10">
              <p>{certification}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Certifications;
