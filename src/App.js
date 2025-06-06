import React from 'react';
import Login from './components/login';
import login from './components/login';
import Home from './components/home';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        <Login />
        <Home />
      </div>
    </Router>
  );
}

export default App;
