import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /default */}
        <Route path="/" element={<Navigate to="/default" replace />} />
        
        {/* Dashboard pages */}
        <Route path="/default" element={<DashboardPage />} />
        <Route path="/ecommerce" element={<DashboardPage />} />
        <Route path="/projects" element={<DashboardPage />} />
        <Route path="/onlinecourses" element={<DashboardPage />} />

        {/* Pages */}
        <Route path="/userprofile/*" element={<DashboardPage />} />
        <Route path="/account" element={<DashboardPage />} />
        <Route path="/corporate" element={<DashboardPage />} />
        <Route path="/blog" element={<DashboardPage />} />
        <Route path="/social" element={<DashboardPage />} />

        {/* Catch all fallback to /default */}
        <Route path="*" element={<Navigate to="/default" replace />} />
      </Routes>
    </Router>
  );
}
