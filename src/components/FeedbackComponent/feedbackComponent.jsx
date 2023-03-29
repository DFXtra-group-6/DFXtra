import React from "react";
import "./feedback.css";

import placeholder from "../../assets/profile-icon.png";

const Feedback = ({ data }) => {

  const feedback = data;

  const populate = () => {
    const display = feedback.map(feedback => {

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
// <div className="row g-0">
//   <div className="image-socials col-md-1">
//     <div className="user-image-thumbnail">
//       <img src={profileImg} alt="thumbnail-profile" />
//     </div>
//   </div>
//   <div className="user-header col-md-2">
//     <div className="user-name">
//       <p>
//         <strong>John Doe </strong>
//         <br />
//         Trainer
//       </p>
//     </div>
//     <div className="user-role"></div>
//   </div>
//   <div className="user-feedback col">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
//       voluptatem, ea expedita non omnis incidunt excepturi inventore cum
//       eaque magni tempore! Dicta, dignissimos. Debitis modi officia
//       voluptas repudiandae labore aliquam. Lorem, ipsum dolor sit amet
//       consectetur adipisicing elit. Suscipit hic aut, sed officia, dolorum
//       sint odit ea aliquam repellendus id dolor! Est mollitia sint amet
//       quod provident, error id minus?Lorem ipsum, dolor sit amet
//       consectetur adipisicing elit. Accusamus quos qui odit atque?
//       Voluptatibus aperiam velit, eaque, ipsum, officiis alias nam eius
//       maxime laudantium dignissimos voluptate? Quisquam facere voluptates,
//     </p>
//   </div>
// </div>
// <div className="row g-0">
//   <div className="image-socials col-md-1">
//     <div className="user-image-thumbnail">
//       <img src={profileImg} alt="thumbnail-profile" />
//     </div>
//   </div>
//   <div className="user-header col-md-2">
//     <div className="user-name">
//       <p>
//         <strong>John Doe </strong>
//         <br />
//         Trainer
//       </p>
//     </div>
//     <div className="user-role"></div>
//   </div>
//   <div className="user-feedback col">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
//       voluptatem, ea expedita non omnis incidunt excepturi inventore cum
//       eaque magni tempore! Dicta, dignissimos. Debitis modi officia
//       voluptas repudiandae labore aliquam. Lorem, ipsum dolor sit amet
//       consectetur adipisicing elit. Suscipit hic aut, sed officia, dolorum
//       sint odit ea aliquam repellendus id dolor! Est mollitia sint amet
//       quod provident, error id minus?Lorem ipsum, dolor sit amet
//       consectetur adipisicing elit. Accusamus quos qui odit atque?
//       Voluptatibus aperiam velit, eaque, ipsum, officiis alias nam eius
//       maxime laudantium dignissimos voluptate? Quisquam facere voluptates,
//     </p>
//   </div>
// </div>
// </div>


export default Feedback;
