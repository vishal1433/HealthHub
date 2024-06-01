import React, { useState, useEffect } from 'react';

const PatientReports = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Simulating fetching prescriptions for the patient from the API
    const dummyPrescriptions = [
      {
        doctor: 'Dr. John Doe',
        medicines: ['Medicine A', 'Medicine B'],
        date: '2024-05-10',
      },
      {
        doctor: 'Dr. Jane Smith',
        medicines: ['Medicine C', 'Medicine D'],
        date: '2024-05-08',
      },
    ];
    setPrescriptions(dummyPrescriptions);
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Prescriptions</h1>
      <ul className="space-y-4">
        {prescriptions.map((prescription, index) => (
          <li key={index} className="px-3 py-2 border border-gray-300 rounded-md">
            <h2 className="text-lg font-semibold mb-1">{prescription.doctor}</h2>
            <p className="mb-2">Medicines:</p>
            <ul className="list-disc ml-6 mb-2">
              {prescription.medicines.map((medicine, medIndex) => (
                <li key={medIndex}>{medicine}</li>
              ))}
            </ul>
            <p>Date: {prescription.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientReports;
