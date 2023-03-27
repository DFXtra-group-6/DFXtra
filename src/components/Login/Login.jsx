import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"

import BlueLogo from "../../assets/BlueLogo.png";
import SignInImage from "../../assets/SignInImage.png";

const Login = () => {

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
    const res = await axios
      .post(`http://localhost:4000/login`, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/add";
      });
  };

    return (
        <>
            {<Navigate to="/profile" />}
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
             <img src={BlueLogo} width="30" height="30" alt="digital futures logo"/>
                </a>
                <button type="button" class="btn btn-outline-dark">Talk to us</button>
                
            </nav>
        </div>
        
        <div className="signIn">
            <h1>Sign In</h1>
            <form onSubmit={login}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                    
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange}class="form-control"     id="exampleInputPassword1" placeholder="Password"/>
                </div>
                        
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
                
                <div>
                    <span>Having trouble?</span>
                    <a href="https://digitalfutures.com/">Get in touch</a>
                </div>

                <div>
                    <h5>© 2022 Digital Futures</h5>
                </div>
        </div>
        <div>
                 <img src={SignInImage} alt="sign in"/>
            </div>
        </>        
    )
}

export default Login;