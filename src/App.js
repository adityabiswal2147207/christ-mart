//importing various files from react libraries and other components
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Base from './Base';
import Checkout from './Checkout';


function App() {
  return (

    //bem convention
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<Base><Home/></Base>} />
        <Route path='/Checkout' element={<Base><Checkout /></Base>} />
        <Route path='*' element={<Base><div>404 Page not Found</div></Base>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
