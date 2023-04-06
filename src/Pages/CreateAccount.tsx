import React from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";
function CreateAccount() {
const navigate = useNavigate();
const goToLogin = () => navigate("/login");
  return (
    <div className="Login">
      <div className="LoginBox">
       <div className="LoginHeader">Create An Account</div>
         <div className="inputs"/>
          <input className="email" placeholder="Email Address"/>
           <input
            className="password"
            placeholder="Password"
            type="password"
            />
            <input className="confirmPassword" placeholder="Password" type="password"/>
        </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            {/*<button className="submitbutton">Sign-Up</button>*/}
            <button onClick={goToLogin} className="submitbutton">Sign-Up</button>
          </div>
          <div className="BacktoLogin">Already have an account? Sign-In.</div>
          <a href="/foobar">Already have an account? Sign-In.</a>
         </div>
        );
        }
  export default CreateAccount;