import "./App.css";
import LoginPage from "./components/Login-page/login-page";
import ProfilePage from "./components/ProfilePage/profilePage";
import { useState, useEffect } from "react";
import { getDataAsync } from "./async/profileAPICalls";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register'
import AuthService from "./services/auth.service";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );


}

export default App;
