import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientDashboard from './PatientDashboard';

function PatientHome() {
  useEffect(() => {
    toast.success('Welcome to the Patient Dashboard!');
  }, []);

  return (
    <div>
      <div>
        <PatientDashboard />
      </div>
      <div className='container mx-auto mt-8 mb-8 px-10 py-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="mb-6 md:mb-0 md:mr-4 flex flex-col items-center">
            <Link to="/appointmentbooking" className="block">
              <img src="https://i.ibb.co/Bf4gfRj/appointments.webp" alt="Ambulance Icon" className="w-40 h-40 rounded-full bg-blue-300 p-2 shadow-md" />
              <p className="text-green-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Appointment Booking</p>
            </Link>
          </div>
          <div className="mb-6 md:mb-0 md:mr-4 flex flex-col items-center">
            <Link to="/patientreports" className="block">
              <img src="https://i.ibb.co/WsyRTMK/reports-256x171.webp" alt="Ambulance Icon" className="w-40 h-40 rounded-full bg-green-300 p-2 shadow-md" />
              <p className="text-green-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Reports</p>
            </Link>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <Link to="/patientsbill" className="block">
              <img src="https://i.ibb.co/zs101K7/billing.webp" alt="Ambulance Icon" className="w-40 h-40 rounded-full bg-yellow-300 p-2 shadow-md" />
              <p className="text-green-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Billing</p>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PatientHome;
