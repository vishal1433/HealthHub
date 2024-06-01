import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen lg:w-64 text-white">
      <div className="p-4 bg-gradient-to-b from-indigo-500 to-purple-700 h-full">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <button onClick={() => navigate('/admindashboard')} className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-start">
              <span className="mr-3">📅</span> Appointments
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/patientlist')} className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-start">
              <span className="mr-3">👥</span> Patients
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/doctorlist')} className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-start">
              <span className="mr-3">🩺</span> Doctors
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/analytics')} className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-start">
              <span className="mr-3">📊</span> Analytics
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/')} className="w-full py-2 px-4 rounded-md bg-red-600 hover:bg-red-500 text-white flex items-center justify-start">
              <span className="mr-3">🚪</span> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
