import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/login.css";

import bluelogo from "../../assets/blue-logo.png";
import SignInImage from "../../assets/SignInImage.png";

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const login = async (e) => {
        e.preventDefault();

        const res = await submitLogin();

        if (res.user) {
            alert(res.message);
            localStorage.setItem(`user`, JSON.stringify(res.user));
            // navigate('/profile');
            navigate(`/profile/${res.user._id}`);

            return;
        }
        alert(res.message);
    };

    const submitLogin = async () => {
        try {
            const res = await axios
                .post(process.env.REACT_APP_URL, user)

            return { message: res.data.message, status: res.status, user: res.data.user }
        }
        catch (err) {
            return {
                status: err.response?.status,
                message: err.response?.data.message,
                error: {
                    type: "post",
                }
            }
        }
    }

    return (
        <>
            <div className="">
                <nav className="navbar navbar-light bg-light ">
                    <a className="navbar-brand" href="#">
                        <img
                            src={bluelogo}
                            width="40"
                            height="40"
                            alt="digital futures logo"
                        />
                    </a>
                    <button type="button" className="btn btn-outline-dark">
                        Talk to us
                    </button>
                </nav>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <h2>Sign In</h2>
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Password*</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </form>

                        <div className="touch">
                            <span>Sign up for an account</span>
                            <a href='/register'>
                                <strong> Register</strong>
                            </a>
                        </div>

                        <div className="touch">
                            <span>Having trouble? </span>
                            <a href="https://digitalfutures.com/">
                                <strong> Get in touch</strong>
                            </a>
                        </div>


                        <div className="footer">
                            <h6>© 2022 Digital Futures</h6>
                        </div>
                    </div>
                    <div className="col-7">
                        <img src={SignInImage} alt="sign in" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
