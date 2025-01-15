import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <header>
        <div className="container">
          <h3>Hi, {username}</h3>
          <button id="menu-toggle">
            <i className="material-icons">menu</i>
          </button>
          <nav id="nav">
            <a href="#">Home</a>
            <a href="#">Sign Up</a>
            <a href="#">About</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="text">
            <h1>Travel Your Way. Today</h1>
            <p>
              Same day tickets for your travel needs.
              <br />
              Save on Amtrak, Greyhound, MegaBus, and many airlines
            </p>
            <a href="#" className="btn">
              Sign Up Now!
            </a>
          </div>
        </div>
        <div className="grid">
          <div className="col-3">
            <div className="panel">
              <div className="head">
                <i className="material-icons">alarm_on</i>
                <h3>Quick</h3>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="panel">
              <div className="head">
                <i className="material-icons">mood</i>
                <h3>Easy</h3>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="panel">
              <div className="head">
                <i className="material-icons">security</i>
                <h3>Secure</h3>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="item">
            <p>
              <a href="#">Your Privacy</a>
              <a href="#">Careers</a>
              <a href="#">Contact Us</a>
            </p>
          </div>
          <div className="item">
            <p>
              <a href="#">
                <i className="socicon-facebook"></i>
              </a>
              <a href="#">
                <i className="socicon-twitter"></i>
              </a>
              <a href="#">
                <i className="socicon-instagram"></i>
              </a>
              <a href="#">
                <i className="socicon-mail"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
