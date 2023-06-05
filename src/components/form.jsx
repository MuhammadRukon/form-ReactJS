import React from "react";
import ReactDOM from "react-dom/client";
import "./form.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <section>
      <div className="register">
        <div className="box">
          <h2>Sign Up</h2>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email-address"></input>
            <input type="text" placeholder="password"></input>
            <input type="text" placeholder="confirm password"></input>
            <button className="btn">sign up</button>
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="span">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
