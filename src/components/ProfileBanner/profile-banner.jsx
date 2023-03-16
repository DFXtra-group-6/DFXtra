import React from "react";
import "./profile-banner.css";

import profileImg from "../../assets/profile-img.jpg";

const ProfileBanner = () => {
  return (
    <div className=" container2">
      <div className="image-socials ">
        <div className="user-image">
          <img src={profileImg} alt="default-profile" />
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-square-youtube"></i>
        </div>
      </div>
      <div className="user-content">
        <div className="user-header">
          <div className="user-name">
            <h3>John Doe</h3>
            <span className="user-pronouns">(he/him)</span>
          </div>
          <div className="user-titles">
            Software Graduate - Maths Graduate - Python Programmer - Full Stack
            Dev - Speaks Spanish
          </div>
        </div>
        <div className="user-overview">
          <h5>Overview</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            voluptatem, ea expedita non omnis incidunt excepturi inventore cum
            eaque magni tempore! Dicta, dignissimos. Debitis modi officia
            voluptas repudiandae labore aliquam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit hic aut, sed officia, dolorum
            sint odit ea aliquam repellendus id dolor! Est mollitia sint amet
            quod provident, error id minus?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Accusamus quos qui odit atque?
            Voluptatibus aperiam velit, eaque, ipsum, officiis alias nam eius
            maxime laudantium dignissimos voluptate? Quisquam facere voluptates,
          </p>
        </div>
      </div>

      {/* <div class="account-container">
        <div class="card">
          <div class="user">
            <img
              id="userAvatar"
              src="https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg"
              width="100px"
              height="100px"
            />
          </div>
          <div class="accountStats">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            inventore a animi rerum possimus. Numquam, recusandae velit.
            Quibusdam placeat libero impedit deleniti laudantium tenetur maxime
            officia omnis, voluptates pariatur ipsa totam provident cum,
            inventore labore. Dolores illo ex minima, animi quia doloremque
            quidem! Magni, mollitia laboriosam! Sed neque doloremque dicta?
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileBanner;
