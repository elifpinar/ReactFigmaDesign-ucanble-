import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './PageOne';
import jsonData from './RoomStatusData.json'; // JSON verisini import et
import KatPage from './KatPage';
import OdaPage from './OdaPage';
import OccupancyRates from './OccupancyRates';
import ServiceRequests from './ServiceRequests';
import AlarmStatus from './AlarmStatus';
import HVACStatus from './HVACStatus';
import Dashboard from './Dashboard';
import SleepScore from './SleepScore';
import RoomServicesPie from './RoomServicesPie';
function MainPage() {
  const Home = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <PageOne jsonData={jsonData} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="kat" element={<KatPage />} />
        <Route path="oda" element={<OdaPage />} />
        <Route path="occupancyrates" element={<OccupancyRates />} />
        <Route path="servicerequests" element={<ServiceRequests />} />
        <Route path="alarmstatus" element={<AlarmStatus />} />
        <Route path="hvacstatus" element={<HVACStatus />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sleepscore" element={<SleepScore />} />
        <Route path="roomservicespie" element={<RoomServicesPie />} />

      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
