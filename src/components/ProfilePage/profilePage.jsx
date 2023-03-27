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

const ProfilePage = ({ profileData }) => {

    return (
        <div className="main-container container-fluid p-0">
            <div className="vert-nav">
                <NavbarComp />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="main-content">
                        <div className="col mb-3">
                            <div className="">
                                <Greeting name={profileData.name} />
                            </div>
                            <div>
                                <ProfileBanner profileData={profileData} />
                            </div>
                        </div>
                        <div className="col ">
                            <div className="row ">
                                <div className="col-lg-9 ">
                                    <AllExperience experience={profileData.experience} />
                                    <AllTraining training={profileData.trainingProgress} />
                                    <FeedbackComponent feedback={profileData.feedback} />
                                </div>
                                <div className=" col-lg-3">
                                    <PersonalityType />
                                    <Certifications certifications={profileData.certifications} />
                                    <DueDiligence dueDiligence={profileData.dueDiligenceChecks} />
                                    <Interests interests={profileData.interests} />
                                    <KeyTools keyTools={profileData.keyTools} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
