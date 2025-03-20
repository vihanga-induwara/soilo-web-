import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './componet/NavbarComponent.js';
import HomeScreen from './page/HomeScreen.js';
import ProfileScreen from './page/ProfileScreen.js';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
