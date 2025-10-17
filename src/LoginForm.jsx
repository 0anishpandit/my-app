import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./index.css"; 
import { useAuthStore } from './store/useAuthStore';

const LoginForm = () => {
  const navigate = useNavigate();


  // Access Zustand Store
  const {email , password, setEmail , setPassword , login}  = useAuthStore();

  const handleSubmit = (e) => {
     e.preventDefault(); // Prevent page reload


    // TODO: Add login logic here (e.g., API call)
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
  };

  const route = login(email , password);
  if (route) navigate(`/${route}`);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button 
          type='submit'
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;