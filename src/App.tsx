 import "./App.css";
 import About from "./Views/About";
 import Home from "./Views/Home";
 import Login from "./Pages/Login";
//
 import Blogs from "./Views/Blogs";
// //import Contact from "./Views/Contact";
//
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
         <Router>
           <Routes>
               <Route path="login" element={<Login />}>
                <Route path ="home" element={<Home />}/>
                 <Route index element={<Home/>}></Route>
                  <Route path="about" element={<About/>}></Route>
                  <Route path="blogs" element={<Blogs/>}></Route>
               </Route>
             </Routes>
         </Router>
         );
        }
export default App;