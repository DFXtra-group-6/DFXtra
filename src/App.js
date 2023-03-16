import AllExperience from './components/Experience/AllExperience';
import "./App.css";
import ProfileBanner from "./components/ProfileBanner/profile-banner";

import PersonalityType from "./components/Personality/PersonalityType";
import FeedbackComponent from "./components/FeedbackComponent/feedbackComponent";

import NavbarComp from "./components/NavbarComp";
import Greeting from "./components/Greeting";



function App() {
  return (
    <div>

      <NavbarComp />
      <Greeting />
      <ProfileBanner />

      <PersonalityType />
      <FeedbackComponent />

      <AllExperience />


    </div>
  );
}

export default App;
