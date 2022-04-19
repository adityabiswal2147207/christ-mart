import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Routes,Route} from "react-router-dom";


function App() {
  return (
    //bem convention
    <Router>
    <div className="app">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Header/*" element={<Header />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
