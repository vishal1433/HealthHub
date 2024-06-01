import React, { useState } from 'react';

const DoctorBilling = () => {
  const [patientName, setPatientName] = useState('');
  const [services, setServices] = useState([]);
  const [serviceInput, setServiceInput] = useState('');
  const [costInput, setCostInput] = useState('');
  const [isBillGenerated, setIsBillGenerated] = useState(false);

  const addService = () => {
    if (serviceInput && costInput) {
      const newService = { name: serviceInput, cost: parseInt(costInput) };
      setServices([...services, newService]);
      setServiceInput('');
      setCostInput('');
    }
  };

  const generateBill = () => {
    // Logic to send the generated bill to the patient or store it in the database
    console.log('Generated Bill:', { patientName, services });
    setIsBillGenerated(true);
    setPatientName('');
    setServices([]);
  };

  const resetForm = () => {
    setIsBillGenerated(false);
    setPatientName('');
    setServices([]);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5 text-blue-500">Generate Bill</h1>
      <div className="mb-4">
        <label htmlFor="patientName" className="block font-semibold mb-1">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Service Name"
          value={serviceInput}
          onChange={(e) => setServiceInput(e.target.value)}
          className="w-1/2 mr-2 border border-gray-300 rounded-md px-3 py-2"
        />
        <input
          type="number"
          placeholder="Cost"
          value={costInput}
          onChange={(e) => setCostInput(e.target.value)}
          className="w-1/4 border border-gray-300 rounded-md px-3 py-2"
        />
        <button onClick={addService} className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600">Add Service</button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="bg-blue-100">
            <td colSpan="2" className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">Patient Name: {patientName}</td>
          </tr>
          <tr className="bg-blue-100">
            <td colSpan="2" className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">Date: {new Date().toLocaleDateString()}</td>
          </tr>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2">Service</th>
            <th className="border border-gray-300 px-4 py-2">Cost</th>
          </tr>
          {services.map((service, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{service.name}</td>
              <td className="border border-gray-300 px-4 py-2">${service.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!isBillGenerated && (
        <div className="mt-4">
          <button onClick={generateBill} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Generate Bill</button>
        </div>
      )}
      {isBillGenerated && (
        <div className="mt-4 text-green-600 font-semibold">
          Bill generated successfully!
          <button onClick={resetForm} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600">Generate Another Bill</button>
        </div>
      )}
    </div>
  );
};

export default DoctorBilling;
