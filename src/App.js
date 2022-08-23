import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Cards from './components/Card/Cards';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} exact />
        <Route path="/game" element={<Cards/>} exact />
      </Routes>
    </Router>
  );
};

export default App;