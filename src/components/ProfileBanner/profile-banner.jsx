import React from "react";
import "./profile-banner.css";
//import backgroundImg from "../../assets/banner-background.jpg";

import profileImg from "../../assets/profile-img.jpg";

const ProfileBanner = ({ data }) => {
    return (
        <div className=" container2">
            {/* <div className="absolute">
        <span>
          <img
            src={backgroundImg}
            alt="background cover"
            className="half-background"
          />
        </span>
      </div> */}
            <div className="d-flex content">
                <div className="image-socials ">
                    <div className="user-image">
                        <img src={profileImg} alt="default-profile" />
                    </div>
                    <div className="social-icons">
                        <a href={data.socials.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                        <a href={data.socials.github}><i className="fa-brands fa-github"></i></a>
                        <a href={data.socials.youtube}><i className="fa-brands fa-square-youtube"></i></a>
                    </div>
                </div>
                <div className="user-content">
                    <div className="user-header">
                        <div className="user-name">
                            <h3>{data.name}</h3>
                            <span className="user-pronouns">({data.pronouns})</span>
                        </div>
                        <div className="user-titles">
                            {data.tagline}
                        </div>
                    </div>
                    <div className="user-overview">
                        <h5>Overview</h5>
                        <p>
                            {data.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
