import React, { useState } from 'react';

const DoctorCreateReport = ({ onReportSubmit }) => {
  const [fileName, setFileName] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName || !doctorName) {
      alert('Please fill in all fields.');
      return;
    }
    // Assume additional data like date is handled on the backend
    onReportSubmit({ fileName, doctorName });
    setFileName('');
    setDoctorName('');
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">Create New Report</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="fileName" className="block text-sm font-medium text-gray-700">File Name:</label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name:</label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default DoctorCreateReport;
