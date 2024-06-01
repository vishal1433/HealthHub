import React, { useState } from 'react';

const PatientsBill = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      doctorName: 'Dr. John Doe',
      date: '2024-03-15',
      services: [
        { name: 'Consultation', cost: 50 },
        { name: 'Blood Test', cost: 100 },
      ],
      totalAmount: 150,
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Smith',
      date: '2024-04-15',
      services: [
        { name: 'Consultation', cost: 60 },
        { name: 'Blood Test', cost: 110 },
        { name: 'X-Ray', cost: 160 },
      ],
      totalAmount: 330,
    },
    {
      id: 3,
      doctorName: 'Dr. Sarah Adams',
      date: '2024-05-15',
      services: [
        { name: 'Consultation', cost: 70 },
        { name: 'Blood Test', cost: 120 },
        { name: 'MRI Scan', cost: 250 },
      ],
      totalAmount: 440,
    },
  ]);

  const [selectedBill, setSelectedBill] = useState(null);

  const handleViewBill = (id) => {
    // Find the selected bill from the bills array
    const selected = bills.find((bill) => bill.id === id);
    setSelectedBill(selected);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Bill Details</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Doctor Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Total Amount</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={bill.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{bill.doctorName}</td>
              <td className="border border-gray-300 px-4 py-2">{bill.date}</td>
              <td className="border border-gray-300 px-4 py-2">${bill.totalAmount}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleViewBill(bill.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBill && (
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-3">Selected Bill Details</h2>
          <p>
            <span className="font-semibold">Doctor Name:</span> {selectedBill.doctorName}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {selectedBill.date}
          </p>
          <ul>
            {selectedBill.services.map((service, index) => (
              <li key={index}>{service.name} - ${service.cost}</li>
            ))}
          </ul>
          <p>
            <span className="font-semibold">Total Amount:</span> ${selectedBill.totalAmount}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientsBill;
