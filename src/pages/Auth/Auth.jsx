import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="Auth">
      <div className="Auth-Left">
        <img src={Logo} alt="Logo " />
        <div className="WebName">
          <h1>Socialize</h1>
          <h5>Connect with people</h5>
        </div>
      </div>
      <div className="Auth-Right">
        <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                className="InfoInput"
                name="firstName"
                placeholder="First Name"
                aria-label="Enter first name"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                className="InfoInput"
                name="lastName"
                placeholder="Last Name"
                aria-label="Enter last name"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="InfoInput"
              name="username"
              placeholder="Username"
              aria-label="Enter a username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="InfoInput"
              name="password"
              placeholder="Password"
              aria-label="Enter a password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="InfoInput"
                name="confirmPassword"
                placeholder="Confirm Password"
                aria-label="Confirm password"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password doesn't match!
          </span>
          <div>
            <span
              style={{ fontSize: "14px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Sign Up."}
            </span>
          </div>
          <button
            className="Button InfoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign up" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
