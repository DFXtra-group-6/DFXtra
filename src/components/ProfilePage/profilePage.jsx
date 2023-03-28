import { useState, useEffect } from 'react';
import { getDataAsync } from '../../async/profileAPICalls.js';

import ProfileBanner from "../ProfileBanner/profile-banner";
import AllExperience from "../Experience/AllExperience";
import NavbarComp from "../NavBar/NavbarComp";
import Greeting from "../NavBar/Greeting";
import PersonalityType from "../Personality/PersonalityType";
import FeedbackComponent from "../FeedbackComponent/feedbackComponent";
import DueDiligence from "../InfoBoxes/DueDiligence";
import Certifications from "../InfoBoxes/Certifications";
import Interests from "../InfoBoxes/Interests";
import KeyTools from "../InfoBoxes/KeyTools";
// import Qualifications from "../InfoBoxes/Qualifications";
import AllTraining from "../Training/AllTraining";
import "./profile-page.css";

const ProfilePage = ({ data }) => {

    console.log(data)


    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    useEffect(() => {
        const { error } = data;

        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }

        setDataStatus({ name: `loading`, message: `Data is loading...` });
    }, [data]);

    return (
        <div className="main-container container-fluid p-0">
            {data?._id !== "" ? <>
                <div className="vert-nav">
                    <NavbarComp />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-content">
                            <div className="col mb-3">
                                <div className="">
                                    <Greeting />
                                </div>
                                <div>
                                    <ProfileBanner />
                                </div>
                            </div>
                            <div className="col ">
                                <div className="row ">
                                    <div className="col-lg-9 ">
                                        <AllExperience />
                                        <AllTraining />
                                        <FeedbackComponent />
                                    </div>
                                    <div className=" col-lg-3">
                                        <PersonalityType />
                                        <Certifications data={data} />
                                        <DueDiligence />
                                        <Interests />
                                        <KeyTools />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                :
                <>
                    {dataStatus.message}
                </>
            }
        </div>
    );
};

export default ProfilePage;
