import "./App.css";
import LoginPage from "./components/Login-page/login-page";
import ProfilePage from "./components/ProfilePage/profilePage";
import { useState, useEffect } from "react";
import { getDataAsync } from "./async/profileAPICalls";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


    // const [data, setData] = useState({ _id: "" });

    // const user = JSON.parse(localStorage.getItem('user'));

    // const getDataHandler = async () => {
    //     const getDataResult = await getDataAsync(user);
    //     console.dir(getDataResult)
    //     const data = getDataResult?.data ? getDataResult.data : {};
    //     setData(data);
    // }

    // useEffect(() => {
    //     getDataHandler();
    // }, [])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
