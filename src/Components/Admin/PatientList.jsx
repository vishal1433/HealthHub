import React from 'react';
import SideNavbar from './SideNavbar';

const PatientList = () => {
  const patientsData = [
    { id: 1, name: 'John Doe', age: 35, gender: 'Male', condition: 'Fever' },
    { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', condition: 'Allergy' },
    { id: 3, name: 'Mike Lee', age: 45, gender: 'Male', condition: 'Diabetes' },
    { id: 4, name: 'Emily Johnson', age: 22, gender: 'Female', condition: 'Cold' },
    { id: 5, name: 'Robert Brown', age: 60, gender: 'Male', condition: 'Hypertension' },
    { id: 6, name: 'Sophia Williams', age: 37, gender: 'Female', condition: 'Asthma' },
    { id: 7, name: 'William Davis', age: 42, gender: 'Male', condition: 'Arthritis' },
    { id: 8, name: 'Olivia Miller', age: 55, gender: 'Female', condition: 'Heart Disease' },
    { id: 9, name: 'James Wilson', age: 30, gender: 'Male', condition: 'Migraine' },
    { id: 10, name: 'Isabella Anderson', age: 48, gender: 'Female', condition: 'High Cholesterol' },
    { id: 11, name: 'Ethan Martinez', age: 25, gender: 'Male', condition: 'Injury' },
    { id: 12, name: 'Ava Taylor', age: 32, gender: 'Female', condition: 'Pregnancy' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <SideNavbar />
      
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg rounded-lg p-4 mb-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Patients List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-purple-700">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Condition</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {patientsData.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{patient.id}</td>
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.age}</td>
                <td className="border px-4 py-2">{patient.gender}</td>
                <td className="border px-4 py-2">{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default PatientList;
