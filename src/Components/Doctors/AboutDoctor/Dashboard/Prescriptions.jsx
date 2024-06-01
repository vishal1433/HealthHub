import React, { useState } from 'react';

const Prescriptions = ({ onPrescriptionSubmit }) => {
  const [doctor, setDoctor] = useState('');
  const [medicines, setMedicines] = useState('');
  const [date, setDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePrescriptionSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (doctor.trim() === '' || medicines.trim() === '' || date.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Create prescription object
    const prescription = { doctor, medicines: medicines.split(','), date };
    // Simulate sending prescription to backend
    try {
      await sendPrescriptionToBackend(prescription);
      // Reset form fields
      setDoctor('');
      setMedicines('');
      setDate('');
      // Show success message
      setSuccessMessage('Prescription sent successfully!');
    } catch (error) {
      console.error('Error sending prescription:', error);
      alert('Error sending prescription. Please try again later.');
    }
  };

  const sendPrescriptionToBackend = async (prescription) => {
    // Simulating sending prescription to backend (replace with actual API call)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, resolve after 1 second
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Prescriptions</h1>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded-md">
          {successMessage}
        </div>
      )}
      <form onSubmit={handlePrescriptionSubmit}>
        <div className="mb-4">
          <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
            Doctor's Name
          </label>
          <input
            type="text"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter Doctor's Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="medicines" className="block text-sm font-medium text-gray-700">
            Medicines (separate with comma)
          </label>
          <textarea
            id="medicines"
            value={medicines}
            onChange={(e) => setMedicines(e.target.value)}
            rows={4}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter Medicines"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Send Prescription
        </button>
      </form>
    </div>
  );
};

export default Prescriptions;
