import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Cards from './components/Card/Cards';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Rules from './components/Rules/Rules';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} exact />
        <Route path="/game" element={<Cards />} exact />
        <Route path="/rules" element={<Rules />} exact />
        <Route path="/leaderboard" element={<LeaderBoard />} exact />
      </Routes>
    </Router>
  );
};

export default App;