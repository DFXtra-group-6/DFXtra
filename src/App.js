import "./App.css";
import AllExperience from "./components/Experience/AllExperience";
import ProfileBanner from "./components/ProfileBanner/profile-banner";

import NavbarComp from "./components/NavBar/NavbarComp";
import Greeting from "./components/NavBar/Greeting";
import PersonalityType from "./components/Personality/PersonalityType";
import FeedbackComponent from "./components/FeedbackComponent/feedbackComponent";

function App() {
  return (
    <div>
      <NavbarComp />
      <Greeting />
      <ProfileBanner />
      <PersonalityType />
      <FeedbackComponent />
      <AllExperience />
      <PersonalityType />
    </div>
  );
}

export default App;
