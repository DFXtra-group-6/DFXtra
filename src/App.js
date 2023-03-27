import "./App.css";
import LoginPage from "./components/Login-page/login-page";
import ProfilePage from "./components/ProfilePage/profilePage";
import {Router, Routes, Route}  from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/" element={<LoginPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
