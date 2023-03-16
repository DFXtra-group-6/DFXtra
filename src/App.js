import AllExperience from './components/Experience/AllExperience';
import "./App.css";
import ProfileBanner from "./components/ProfileBanner/profile-banner";
import NavbarComp from "./components/NavbarComp";
import Greeting from "./components/Greeting";


function App() {
  return (
    <div>

      <NavbarComp />
      <Greeting />
      <ProfileBanner />
      <AllExperience />

    </div>
  );
}

export default App;
