import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientDashboard from '../Dashboard/PatientDashboard';

function AppointmentBooking() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments from server on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/auth/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async (e) => {
     await e.preventDefault();

    // Validate and handle form submission
    if (patientName && selectedDoctor && selectedDisease && appointmentDate) {
      const newAppointment = {
        patientName,
        doctor: selectedDoctor,
        disease: selectedDisease,
        appointmentDate,
      };

      try {
        // Send POST request to server to add appointment
        await axios.post('http://localhost:8000/api/auth/appointments', newAppointment);
        // Fetch updated appointments from server
        fetchAppointments();
        // Clear form fields
        setPatientName('');
        setSelectedDoctor('');
        setSelectedDisease('');
        setAppointmentDate('');
      } catch (error) {
        console.error('Error adding appointment:', error);
        alert('Error adding appointment. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }

    setSelectedAppointment(null);
  };

  const removeAppointment = async (index) => {
    try {
      // Send DELETE request to server to remove appointment
      await axios.delete(`http://localhost:8000/api/auth/appointments/${appointments[index]._id}`);
      // Fetch updated appointments from server
      fetchAppointments();
    } catch (error) {
      console.error('Error removing appointment:', error);
      alert('Error removing appointment. Please try again.');
    }
    setSelectedAppointment(null);
  };

  const doctors = [
    { id: 1, name: 'Dr. Smith', diseases: ['Cardiology', 'Internal Medicine'] },
    { id: 2, name: 'Dr. Johnson', diseases: ['Orthopedics', 'Rheumatology'] },
  { id: 3, name: 'Dr. Anderson', diseases: ['Dermatology', 'Allergy'] },
  { id: 4, name: 'Dr. Brown', diseases: ['Pediatrics', 'Neurology'] },
  { id: 5, name: 'Dr. Davis', diseases: ['Oncology', 'Hematology'] },
  { id: 6, name: 'Dr. Miller', diseases: ['Gastroenterology', 'Endocrinology'] },
  { id: 7, name: 'Dr. Wilson', diseases: ['Psychiatry', 'Pulmonology'] },
  { id: 8, name: 'Dr. Carter', diseases: ['Urology', 'Nephrology'] },
  { id: 9, name: 'Dr. Taylor', diseases: ['Ophthalmology', 'ENT'] },
  { id: 10, name: 'Dr. Martinez', diseases: ['Obstetrics and Gynecology', 'Infectious Diseases'] },
    
    
  ];

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    setSelectedDoctor(selectedDoctor);
    setSelectedDisease(''); // Clear selected disease when doctor changes
  };

  const handleDiseaseChange = (e) => {
    setSelectedDisease(e.target.value);
  };

  return (
    <div>
      <div>
        <PatientDashboard />
      </div>
      <div className="bg-white items-center px-4 py-4">
        <div className="container mx-auto px-6 text-gray-600">
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">Schedule an Appointment</h2>
          {/* Appointment Form */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-4">Book an Appointment</h3>
            <form onSubmit={addAppointment} className="space-y-4">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium ml-12 text-gray-700">Patient Name</label>
                <input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="mt-1 ml-12 p-2 border rounded-md w-96" required />
              </div>
              <div>
                <label htmlFor="doctor" className="block text-sm font-medium ml-12 text-gray-700">Select Doctor</label>
                <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange} className="mt-1 ml-12 p-2 border rounded-md w-96" required>
                  <option value="" disabled>Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="disease" className="block text-sm font-medium ml-12 text-gray-700">Select Disease</label>
                <select id="disease" value={selectedDisease} onChange={handleDiseaseChange} className="mt-1 ml-12 p-2 border rounded-md w-96" required>
                  <option value="" disabled>Select Disease</option>
                  {doctors.find((doctor) => doctor.name === selectedDoctor)?.diseases.map((disease, index) => (
                    <option key={index} value={disease}>{disease}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium ml-12 text-gray-700">Appointment Date</label>
                <input type="date" id="appointmentDate" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="mt-1 ml-12 p-2 border rounded-md w-96" required />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 ml-12 rounded-md">Book Appointment</button>
            </form>
          </div>
          {/* Appointment List */}
          <div>
            <h3 className="text-2xl font-semibold ml-12 mt-8 mb-4">Your Appointments</h3>
            <ul className="space-y-4 ml-12">
              {appointments.map((appointment, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-md">
                  <h4 className="text-lg font-semibold">{appointment.doctor}</h4>
                  <p className="text-gray-700">Patient: {appointment.patientName} | Disease: {appointment.disease} | Date: {appointment.appointmentDate}</p>
                  <button onClick={() => setSelectedAppointment(appointment)} className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md">View Details</button>
                  <button onClick={() => removeAppointment(index)} className="mt-2 ml-2 bg-red-500 text-white py-1 px-2 rounded-md">Cancel Appointment</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Appointment Details Modal */}
          {selectedAppointment && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
                <p>Doctor: {selectedAppointment.doctor}</p>
                <p>Patient: {selectedAppointment.patientName}</p>
                <p>Disease: {selectedAppointment.disease}</p>
                <p>Date: {selectedAppointment.appointmentDate}</p>
                <button onClick={() => setSelectedAppointment(null)} className="mt-4 bg-blue-500 text-white py-1 px-2 rounded-md">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;
