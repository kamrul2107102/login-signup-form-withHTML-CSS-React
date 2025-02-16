import React from "react";
import { useState } from "react";
import "./login.css";
const LoginSignup = () => {
  const [action, setAction] = useState("SignUp");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action == "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src="" alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="forgot-password">
            Lost password <span>ClickHere</span>
          </div>
          <div className="submitcontainer">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("SignUp");
              }}
            >
              SignUp
            </div>
            <div
              className={action === "SignUp" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
