import "./App.css";
import AllExperience from "./components/Experience/AllExperience";
import ProfileBanner from "./components/ProfileBanner/profile-banner";

import NavbarComp from "./components/NavBar/NavbarComp";
import Greeting from "./components/NavBar/Greeting";
import PersonalityType from "./components/Personality/PersonalityType";
import FeedbackComponent from "./components/FeedbackComponent/feedbackComponent";
import Certifications from "./components/InfoBoxes/Certifications";
import DueDiligence from "./components/InfoBoxes/DueDiligence";
import Interests from "./components/InfoBoxes/Interests";
import KeyTools from "./components/InfoBoxes/KeyTools";
import Qualifications from "./components/InfoBoxes/Qualifications";

function App() {
  return (
    <div>
      <NavbarComp />
      <Greeting />
      <ProfileBanner />
      <PersonalityType />
      {/* <Certifications /> */}
      <DueDiligence />
      {/* <Interests />
      <KeyTools />
      <Qualifications /> */}
      <AllExperience />
      <FeedbackComponent />
    </div>
  );
}

export default App;
