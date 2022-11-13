import React from "react";
import Single from "./pages/single/Single"
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact"
import Cars from "./pages/cars/Cars"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopBar from "./components/topbar/TopBar";
import Header from "./components/header/Header"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Header/>
          <Home />
        </Route>
        <Route path="/register">
           <Register />
        </Route>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/cars">
       <Cars />
        </Route>
        <Route path="/about">
      <About />
        </Route>
        <Route path="/contact">
      <Contact/>
        </Route>
        <Route path="/car/:carId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;



