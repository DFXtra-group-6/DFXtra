import "./App.css";
import LoginPage from "./components/Login-page/login-page";
import ProfilePage from "./components/ProfilePage/profilePage";
import { useState, useEffect } from "react";
import { getDataAsync } from "./async/profileAPICalls";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthService from "./services/auth.service";

function App() {



  const [data, setData] = useState({ _id: "" });

  const getDataHandler = async () => {
    const getDataResult = await getDataAsync();
    const data = getDataResult?.data ? getDataResult.data : {};
    setData(data);
  }

  useEffect(() => {
    getDataHandler();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage data={data} />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
