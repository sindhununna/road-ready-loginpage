import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages';
import Map from '../pages/Map';
import Alerts from '../pages/Alerts';
import Dashboard from '../pages/Dashboard';
import Fleetdashboard from '../pages/Fleetdashboard';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import Tscurrent from '../pages/Tscurrent';
import Tshistory from '../pages/Tshistory';
import Support from '../pages/Support';


function App({Logout}) {
const dashboardStyle={    
        fontFamily: "Sora sansSerif",
        boxSizing: "borderBox",
        margin: "0px",
        padding: "0px",      
}

  return (
   <div style={dashboardStyle}>
      <Navbar  Logout={Logout} />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/fleetdashboard' element={<Fleetdashboard/>} />        
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/alerts' element={<Alerts/>} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/tscurrent' element={<Tscurrent/>} />
        <Route path='/tshistory' element={<Tshistory/>} />      
        <Route path='/support' element={<Support/>} />
      </Routes>
      </div>
  );
}

export default App;