import React from 'react';
import SideNavbar from './SideNavbar';

const DoctorsList = () => {
  const doctorsData = [
    { id: 1, name: 'Dr. John Smith', specialization: 'Cardiology', experience: '10 years' },
    { id: 2, name: 'Dr. Sarah Johnson', specialization: 'Dermatology', experience: '8 years' },
    { id: 3, name: 'Dr. Michael Brown', specialization: 'Orthopedics', experience: '12 years' },
    { id: 4, name: 'Dr. Emily Davis', specialization: 'Pediatrics', experience: '6 years' },
    { id: 5, name: 'Dr. Robert Wilson', specialization: 'Neurology', experience: '15 years' },
    { id: 6, name: 'Dr. Sophia Miller', specialization: 'Oncology', experience: '9 years' },
    { id: 7, name: 'Dr. William Anderson', specialization: 'Gynecology', experience: '11 years' },
    { id: 8, name: 'Dr. Olivia Martinez', specialization: 'Urology', experience: '7 years' },
    { id: 9, name: 'Dr. Sophia Lopez', specialization: 'Psychiatry', experience: '10 years' },
    { id: 10, name: 'Dr. Ethan Clark', specialization: 'Ophthalmology', experience: '9 years' },
    { id: 11, name: 'Dr. Lily Wang', specialization: 'Dentistry', experience: '6 years' },
    { id: 12, name: 'Dr. Benjamin Harris', specialization: 'Cardiology', experience: '12 years' }


  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideNavbar />

      <div className="flex-1 overflow-auto bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 shadow-xl rounded-lg p-4 mb-6 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Doctors List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-purple-800">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Specialization</th>
                <th className="px-4 py-2">Experience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {doctorsData.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-purple-700">
                  <td className="border px-4 py-2">{doctor.id}</td>
                  <td className="border px-4 py-2">{doctor.name}</td>
                  <td className="border px-4 py-2">{doctor.specialization}</td>
                  <td className="border px-4 py-2">{doctor.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
