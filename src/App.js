import "./App.css";
import ProfileBanner from "./components/ProfileBanner/profile-banner";
import PersonalityType from "./components/Personality/PersonalityType";
import FeedbackComponent from "./components/FeedbackComponent/feedbackComponent";

function App() {
  return (
    <div>
      <ProfileBanner />
      <PersonalityType />
      <FeedbackComponent />
    </div>
  );
}

export default App;
