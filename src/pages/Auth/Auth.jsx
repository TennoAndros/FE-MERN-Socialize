import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="Auth-Left">
        <img src={Logo} alt="Logo " />
        <div className="WebName">
          <h1>Socialize</h1>
          <h5>Connect with people</h5>
        </div>
      </div>
      <LogIn />
    </div>
  );
};
function LogIn() {
  return (
    <div className="Auth-Right">
      <form className="InfoForm AuthForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="InfoInput"
            name="Username"
          />
        </div>

        <div>
          <input
            type="Password"
            className="InfoInput"
            placeholder="Password"
            name="Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account? Sign up!
          </span>
          <button className="Button InfoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="Auth-Right">
      <form className="InfoForm AuthForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="FirstName"
            placeholder="First Name"
            aria-label="Enter first name"
          />
          <input
            type="text"
            className="InfoInput"
            name="LastName"
            placeholder="Last Name"
            aria-label="Enter last name"
          />
        </div>

        <div>
          <input
            type="email"
            className="InfoInput"
            name="Email"
            placeholder="E-mail"
            aria-label="Enter an email"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="UserName"
            placeholder="Username"
            aria-label="Enter a username"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="Password"
            placeholder="Password"
            aria-label="Enter a password"
          />
          <input
            type="text"
            className="InfoInput"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            aria-label="Confirm password"
          />
        </div>
        <div>
          <span style={{ fontSize: "14px" }}>
            Already have an account? Login!
          </span>
        </div>
        <button className="Button InfoButton" typer="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Auth;
