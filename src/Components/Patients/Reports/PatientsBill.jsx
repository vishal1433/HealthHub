import React, { useState } from 'react';
import PatientDashboard from '../Dashboard/PatientDashboard';

const PatientsBill = () => {
  const initialBills = [
    { id: 1, description: 'Consultation Fee', amount: 50 },
    { id: 2, description: 'Lab Test', amount: 75 },
    { id: 3, description: 'Medication', amount: 30 },
  ];

  const [bills, setBills] = useState(initialBills);
  const [newBill, setNewBill] = useState({ description: '', amount: 0 });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedBills = bills.filter((bill) => bill.id !== id);
    setBills(updatedBills);
  };

  const handleAddBill = () => {
    setBills([...bills, { ...newBill, id: bills.length + 1 }]);
    setModalOpen(false);
    setNewBill({ description: '', amount: 0 });
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewBill({ description: '', amount: 0 });
  };

  return (
    <div>
      <div>
        <PatientDashboard/>
      </div>
    <div className="container mx-auto px-4 py-4 mt-2">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>

      <div className="mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Bill
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Bill</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <input
                  type="text"
                  value={newBill.description}
                  onChange={(e) => setNewBill({ ...newBill, description: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                <input
                  type="number"
                  value={newBill.amount}
                  onChange={(e) => setNewBill({ ...newBill, amount: parseInt(e.target.value, 10) || 0 })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleAddBill}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td className="border px-4 py-2">{bill.description}</td>
              <td className="border px-4 py-2">{bill.amount}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(bill.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {bills.length === 0 && (
            <tr>
              <td className="border px-4 py-2" colSpan="3">
                <p className="text-center">No bills to display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PatientsBill;
