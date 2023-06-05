import "./signin.css";
import { Link } from "react-router-dom";

import React from "react";

const signin = () => {
  return (
    <section>
      <div className="register">
        <div className="box">
          <h2>Sign in</h2>
          <form id="form" className="flex flex-col">
            <input type="email" placeholder="Email-address"></input>
            <input type="text" placeholder="password"></input>
            <button className="btn">Sign In</button>
            <p>
              Don't have an account?{" "}
              <Link to="/" className="span">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default signin;
