import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import "../styles/App.css";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

function ToggleLogin() {
  const [isSignUp, setIsSignUp] = useState(false);

  const [correctUsername, setCorrectUsername] = useState("test123@gmail.com");
  const [correctPassword, setCorrectPassword] = useState("password123");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [incorrectCreds, setIncorrectCreds] = useState(false);
  const [goToHomePage, setGoToHomePage] = useState(false);

  // const [login] = useMutation(LOGIN_MUTATION);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSignIn = () => {
    console.log(username, correctUsername, password, correctPassword);
    if (username === correctUsername && password == correctPassword) {
      setIncorrectCreds(false);
    } else {
      setIncorrectCreds(true);
    }
  };

  const handleSignUp = () => {
    alert("Registered");
  };

  useEffect(() => {
    console.log("Flag is now", incorrectCreds);
  }, [incorrectCreds]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await login({ variables: { username, password } });
  //     localStorage.setItem("token", data.login.token);
  //     // Redirect to home page after login
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
      <div className="form sign-in">
        <img className="logo" src="./src/images/logo192.png" />
        <h2>Welcome back</h2>
        <label>
          <span>Email</span>
          <input type="email" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        {incorrectCreds && (
          <p className="incorrect-msg">
            Incorrect username or password. Try again.
          </p>
        )}
        <button type="button" className="submit" onClick={handleSignIn}>
          Sign In
        </button>
        <button type="button" className="fb-btn">
          Connect with <span>facebook</span>
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover a great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already have an account, just sign in. We've missed you!
            </p>
          </div>
          <div className="img__btn" onClick={handleToggle}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <img className="logo" src="./src/images/logo192.png" />
          <h2>Time to feel like home</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <button type="button" className="submit" onClick={handleSignUp}>
            Sign Up
          </button>
          <button type="button" className="fb-btn">
            Join with <span>facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleLogin;
