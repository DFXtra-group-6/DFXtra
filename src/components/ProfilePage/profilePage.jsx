import ProfileBanner from "../ProfileBanner/profile-banner";
import AllExperience from "../Experience/AllExperience";
import NavbarComp from "../NavBar/NavbarComp";
import Greeting from "../NavBar/Greeting";
import PersonalityType from "../Personality/PersonalityType";
import FeedbackComponent from "../FeedbackComponent/feedbackComponent";
import DueDiligence from "../InfoBoxes/DueDiligence";

const ProfilePage = () => {
  return (
    <div>
      <NavbarComp />
      <Greeting />
      <ProfileBanner />
      <PersonalityType />
      <DueDiligence />
      <AllExperience />
      <FeedbackComponent />
    </div>
  );
};

export default ProfilePage;
