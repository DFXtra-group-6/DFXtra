import "./App.css";
import ProfileBanner from "./components/ProfileBanner/profile-banner";
import NavbarComp from "./components/NavbarComp";
import Greeting from "./components/Greeting";
import PersonalityType from "./components/Personality/PersonalityType";

function App() {
  return (
    <div>
      <NavbarComp />
      <Greeting />
      <ProfileBanner />
      <PersonalityType />
    </div>
  );
}

export default App;
