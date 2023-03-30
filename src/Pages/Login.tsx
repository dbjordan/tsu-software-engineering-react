import React from "react";
import "../App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// //import "./login.scss";
// import { Navigate } from "react-router-dom";
function Login() {
    return(
   <div className="Login">
         <div className="LoginBox">
          <div className="LoginHeader">Sign In</div>
            <div className="inputs"/>
             <input className="email" placeholder="Email Address"/>
              <input
               className="password"
               placeholder="Password"
               type="password"
               />
           </div>
             <div style={{display:"flex", justifyContent:"center"}}>
               <button className="submitbutton">Login</button>
             </div>
             <div className="CreateAccount">Don't have an account? Click here to create an account.</div>
            </div>
           );
           }
       export default Login;