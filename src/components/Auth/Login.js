import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  /**
   * Get user info
   * send these information to our login service
   * get the user
   * show the error
   */
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setErrors({...errors, email: "Please provide a valid email"})
      setUserInfo({ ...userInfo, email: e.target.value });
    } else {
      setErrors({ ...errors, email: "" })
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if(password.length < 6){
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: e.target.value })
    } else {
      setErrors({...errors, password: "" })
      setUserInfo({ ...userInfo, password: e.target.value })
    }
  }

  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={userInfo.email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p> }

        <input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handlePasswordChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;
