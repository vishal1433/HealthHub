import React from 'react';
import PatientDashboard from '../Dashboard/PatientDashboard';

const patientMedicalRecords = [
  {
    id: 1,
    date: '2022-01-01',
    diagnosis: 'Common Cold',
    prescription: 'Antibiotics, Rest',
    doctor: 'Dr. John Doe',
  },
  {
    id: 2,
    date: '2022-02-15',
    diagnosis: 'Influenza',
    prescription: 'Tamiflu, Bed Rest',
    doctor: 'Dr. Jane Smith',
  },
];

const PatientReports = () => {
  return (
    <div>
       <div>
        <PatientDashboard/>
       </div>
      <div className='mt-10 p-10'>
      <h2 className="text-2xl font-bold mb-4">Medical Records</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2 px-4">Date</th>
            <th className="border border-gray-300 py-2 px-4">Diagnosis</th>
            <th className="border border-gray-300 py-2 px-4">Prescription</th>
            <th className="border border-gray-300 py-2 px-4">Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patientMedicalRecords.map((record) => (
            <tr key={record.id}>
              <td className="border border-gray-300 py-2 px-4">{record.date}</td>
              <td className="border border-gray-300 py-2 px-4">{record.diagnosis}</td>
              <td className="border border-gray-300 py-2 px-4">{record.prescription}</td>
              <td className="border border-gray-300 py-2 px-4">{record.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PatientReports;
