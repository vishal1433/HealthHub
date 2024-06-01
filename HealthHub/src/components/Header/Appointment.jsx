// AppointmentPage.js
import React, { useState } from 'react';

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const addAppointment = (e) => {
    e.preventDefault();

    // Validate and handle form submission
    if (patientName && doctorName && appointmentDate) {
      const newAppointment = {
        patientName,
        doctorName,
        appointmentDate,
      };

      // Call the function to add the appointment
      setAppointments([...appointments, newAppointment]);

      // Clear the form
      setPatientName('');
      setDoctorName('');
      setAppointmentDate('');
    } else {
      // Handle validation error (e.g., show an error message)
      alert('Please fill in all fields.');
    }
  };

  // Doctor or Deseases concate start

    const [selectedDoctor, setSelectedDoctor] = useState('');
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
      setSelectedDoctor(e.target.value);
    };

  
  return (
    <div className="py-16 bg-white items-center px-4 py-10">
      <div className="container mx-auto px-6 text-gray-600">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">Schedule an Appointment</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appointment Form */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-4">Book an Appointment</h3>
            <form onSubmit={addAppointment} className="space-y-4">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  value={selectedDoctor}
                  onChange={handleDoctorChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                >
                  <option value="" disabled>Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.diseases.join(', ')}
                    </option>
                  ))}
                </select>
              </div>               

              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Book Appointment
              </button>
            </form>
          </div>
          {/* this only for checking purpose */}
          {/* Appointment List */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Appointments</h3>
            <ul className="space-y-4">
              {appointments.map((appointment, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-md">
                  <h4 className="text-lg font-semibold">{appointment.doctorName}</h4>
                  <p className="text-gray-700">
                    Patient: {appointment.patientName} | Date: {appointment.appointmentDate}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* End here checking */}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
