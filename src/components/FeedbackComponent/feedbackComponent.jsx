import React from "react";
import "./feedback.css";

import placeholder from "../../assets/profile-icon.png";

const Feedback = ({ data }) => {
  const feedbacks = data;

  const populate = () => {
    const display = feedbacks.map(feedback => {
      return (
        <>

          <div className="row g-0">
            <div className="image-socials col-md-1">
              <div className="user-image-thumbnail">
                <img src={placeholder} alt="thumbnail-profile" />
              </div>
            </div>
            <div className="user-header col-md-2">
              <div className="user">
                <p>
                  <strong>{feedback.user} </strong>
                  <br />
                </p>
              </div>
              <div className="user-role">{feedback.userRole}</div>
            </div>
            <div className="user-feedback col">
              <p>
                {feedback.text}
              </p>
            </div>
          </div>
        </>
      )
    })
    return display;
  }

  return (
    <div className="card mb-3 ">
      <h3>Feedback</h3>
      {populate()}
    </div>
  );
};

export default Feedback;
