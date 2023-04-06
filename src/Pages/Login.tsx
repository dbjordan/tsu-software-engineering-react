import React from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";
function Login() {
const navigate = useNavigate();
const goToHome = () => navigate("/home");
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
               <button onClick={goToHome} className="submitbutton">Login</button>
             </div>
             <div className="CreateAccount">Don't have an account? Click here to create an account.</div>
            </div>
           );
           }
       export default Login;