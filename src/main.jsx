import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css'


import LoginForm from './LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testdashboard from './dashboard/testdashboard.jsx';
import StudentDashboard from './dashboard/studentdashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route path="/studentdashboard"  element={<ProtectedRoute> <StudentDashboard /></ProtectedRoute>} />
        <Route path="/testdashboard"  element={<ProtectedRoute> <Testdashboard /> </ProtectedRoute>} />
        {/* You can add more routes here later */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);