import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import MovieList from "./MovieList";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <NavBar/>
          <MovieList/>
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Routes>
    </div>
 
  );
}

export default App;
