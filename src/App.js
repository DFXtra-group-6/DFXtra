import "./App.css";
import LoginPage from "./components/Login-page/login-page";
import ProfilePage from "./components/ProfilePage/profilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthService from "./services/auth.service";

function App() {

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
