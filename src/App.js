import React from 'react';
import Login from './components/login';
import Home from './components/home';
import Expenses from './components/expenses';
import {  BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        {/* <Login />
        <Home /> */}
      </div>
      {/* Sets the page location to use later on */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>

    </Router>
  );
}

export default App;
