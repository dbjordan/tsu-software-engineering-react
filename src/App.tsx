 import "./App.css";
 import About from "./Views/About";
 import Home from "./Views/Home";
 import Login from "./Pages/Login";
 import CreateAccount from "./Pages/CreateAccount"
 //import InventoryList from "./Pages/InventoryList"
//
 import Blogs from "./Views/Blogs";
import {BasicTable} from "./Pages/BasicTable";
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
                 <Route path="/">
                     <Route path="home" element={<Home/>}></Route>
                     <Route index element={<Login />}></Route>
                     <Route path="createAccount" element={<CreateAccount />}></Route>
                     <Route path="about" element={<About/>}></Route>
                 </Route>
             </Routes>
          </Router>
         );
    }
export default App;




