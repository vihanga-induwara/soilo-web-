import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './componet/NavbarComponent.js';
import HomeScreen from './page/HomeScreen.js';
import ProfileScreen from './page/ProfileScreen.js';
import MapScreen from './page/MapScreen.js'; 
import SoiloReportScreen from './page/SoiloReportScreen.js';  
import AboutUsScreen from './page/AboutUsScreen.js';  
import HistoryScreen from './page/HomeScreen.js';  
import CameraScreen from './page/camera.js';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/soilo-report" element={<SoiloReportScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/camera" element={<CameraScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
