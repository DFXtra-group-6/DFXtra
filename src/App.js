import "./App.css";
import ProfilePage from "./components/ProfilePage/profilePage";
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
