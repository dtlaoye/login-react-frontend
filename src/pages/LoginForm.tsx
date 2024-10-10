import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [incorrectCreds, setIncorrectCreds] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN_MUTATION);
  const [register] = useMutation(REGISTER_MUTATION);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  useEffect(() => {
    console.log("Flag is now", incorrectCreds);
  }, [incorrectCreds]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await login({ variables: { username, password } });
    if (data?.login) {
      localStorage.setItem("token", data.login);
      navigate("/homepage");
    } else {
      alert("Login failed");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await register({ variables: { username, password } });
    if (data?.register) {
      localStorage.setItem("token", data.register);
      alert("Registered");
      handleToggle();
    } else {
      alert("Registration failed");
    }
  };

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
        <button type="button" className="submit" onClick={handleLogin}>
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
          <button type="button" className="submit" onClick={handleRegister}>
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

export default LoginForm;
