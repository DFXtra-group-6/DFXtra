import React, { useState } from "react";
import { submitProfileData } from "../../async/profileAPICalls";
import "./profile-banner.css";
//import backgroundImg from "../../assets/banner-background.jpg";
import profileImg from "../../assets/profile-img.jpg";

const ProfileBanner = ({ data }) => {
    const [overview, setOverview] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [profileOverviewInput, setProfileOverviewInput] = useState("");

    const user = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(overview)
        submitProfileData({ data: { overview: overview }, id: user._id })

        // setProfileOverview({
        //     profileOverview: profileOverviewInput,
        // });
        // setIsFormVisible(false);
        // setProfileOverviewInput("");
    };

    const handleEditButton = () => {
        setIsFormVisible(true);
        // setProfileOverviewInput(profileOverview.profileOverview);
        // console.log("clicked edit button");
    };

    const handleCancelButton = () => {
        setIsFormVisible(false);
    };

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
                        <a href={data.socials.linkedin}>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href={data.socials.github}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href={data.socials.youtube}>
                            <i className="fa-brands fa-square-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="user-content">
                    <div className="user-header">
                        <div className="user-name">
                            <h3>{data.name}</h3>
                            <span className="user-pronouns">({data.pronouns})</span>
                        </div>
                        <div className="user-titles">{data.tagline}</div>
                    </div>

                    <div className="user-overview">
                        <h5>Overview</h5>
                        <i className="fa fa-light fa-pencil" onClick={handleEditButton}></i>
                        <>
                            {isFormVisible ? (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <label>Add overview: </label>
                                        <input type="text" value={overview}
                                            onChange={(event) => setOverview(event.target.value)}></input>
                                        <button>Save</button>
                                    </form>
                                    <i
                                        className="fa-sharp fa-solid fa-xmark"
                                        onClick={handleCancelButton}
                                    ></i>
                                </>
                            ) : (
                                <p> {data.overview}</p>
                            )}
                        </>

                        {/* //       <i
          //         className="fa-sharp fa-solid fa-xmark"
          //         onClick={handleCancelButton}
          //       ></i>

          //       <form onSubmit={handleSubmit}>
          //         <label>Overview:</label>
          //         <input
          //           type="text"
          //           value={profileOverviewInput}
          //           onChange={(event) =>
          //             setProfileOverviewInput(event.target.value)
          //           }
          //         ></input>
          //         <button>save</button>
          //       </form>
          //     </div>
          //   </>
          // )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
