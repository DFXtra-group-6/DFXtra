import "./App.css";
import ProfileBanner from "./components/ProfileBanner/profile-banner";
import NavbarComp from "./components/NavbarComp";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <ProfileBanner />
      <NavbarComp />
      <Greeting />
    </div>
  );
}

export default App;
