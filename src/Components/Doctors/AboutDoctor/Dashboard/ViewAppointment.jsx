import React, { useState } from 'react';

function ViewAppointment() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Smith',
      patientName: 'John Doe',
      disease: 'Cardiology',
      appointmentDate: '2024-05-15',
      status: 'Pending',
    },
    {
      id: 2,
      doctor: 'Dr. Brown',
      patientName: 'Jane Smith',
      disease: 'Dermatology',
      appointmentDate: '2024-05-16',
      status: 'Confirmed',
    },
    {
      id: 3,
      doctor: 'Dr. Johnson',
      patientName: 'Mike Lee',
      disease: 'Orthopedics',
      appointmentDate: '2024-05-17',
      status: 'Confirmed',
    },
    {
      id: 4,
      doctor: 'Dr. White',
      patientName: 'Alice Johnson',
      disease: 'Gynecology',
      appointmentDate: '2024-05-18',
      status: 'Canceled',
    },
    {
      id: 5,
      doctor: 'Dr. Martinez',
      patientName: 'Eva Martinez',
      disease: 'Urology',
      appointmentDate: '2024-05-19',
      status: 'Canceled',
    },

    {
      id: 6,
      doctor: 'Dr. Johnson',
      patientName: 'Emily White',
      disease: 'Neurology',
      appointmentDate: '2024-05-16',
      status: 'Pending',
    },
    {
      id: 7,
      doctor: 'Dr. Anderson',
      patientName: 'Michael Brown',
      disease: 'Oncology',
      appointmentDate: '2024-05-17',
      status: 'Pending',
    },
    {
      id: 8,
      doctor: 'Dr. Taylor',
      patientName: 'Sophia Martinez',
      disease: 'Endocrinology',
      appointmentDate: '2024-05-18',
      status: 'Pending',
    },
    {
      id: 9,
      doctor: 'Dr. Adams',
      patientName: 'David Wilson',
      disease: 'Rheumatology',
      appointmentDate: '2024-05-19',
      status: 'Pending',
    },
    {
      id: 10,
      doctor: 'Dr. Parker',
      patientName: 'Emma Johnson',
      disease: 'Dermatology',
      appointmentDate: '2024-05-20',
      status: 'Pending',
    }
    
  ]);

  const handleConfirm = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: 'Confirmed' } : appointment
      )
    );
  };

  const handleCancel = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: 'Canceled' } : appointment
      )
    );
  };

  const pendingAppointments = appointments.filter((appointment) => appointment.status === 'Pending');
  const confirmedAppointments = appointments.filter((appointment) => appointment.status === 'Confirmed');
  const canceledAppointments = appointments.filter((appointment) => appointment.status === 'Canceled');

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-md shadow-lg">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Appointment Details</h2>
      <table className="min-w-full divide-y divide-blue-300">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Doctor</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Patient Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Disease</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-blue-200">
        
          {pendingAppointments.length > 0 && (
            <tr>
              <td colSpan="6" className="bg-gray-200 font-bold px-4 py-2">Pending Appointments</td>
            </tr>
          )}
          {pendingAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border px-4 py-2">{appointment.doctor}</td>
              <td className="border px-4 py-2">{appointment.patientName}</td>
              <td className="border px-4 py-2">{appointment.disease}</td>
              <td className="border px-4 py-2">{appointment.appointmentDate}</td>
              <td className="border px-4 py-2">{appointment.status}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleConfirm(appointment.id)} className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md mr-2">
                  Confirm
                </button>
                <button onClick={() => handleCancel(appointment.id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
          {confirmedAppointments.length > 0 && (
            <tr>
              <td colSpan="6" className="bg-gray-200 font-bold px-4 py-2">Confirmed Appointments</td>
            </tr>
          )}
          {confirmedAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border px-4 py-2">{appointment.doctor}</td>
              <td className="border px-4 py-2">{appointment.patientName}</td>
              <td className="border px-4 py-2">{appointment.disease}</td>
              <td className="border px-4 py-2">{appointment.appointmentDate}</td>
              <td className="border px-4 py-2">{appointment.status}</td>
              <td className="border px-4 py-2">Confirmed</td>
            </tr>
          ))}
          {canceledAppointments.length > 0 && (
            <tr>
              <td colSpan="6" className="bg-gray-200 font-bold px-4 py-2">Canceled Appointments</td>
            </tr>
          )}
          {canceledAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border px-4 py-2">{appointment.doctor}</td>
              <td className="border px-4 py-2">{appointment.patientName}</td>
              <td className="border px-4 py-2">{appointment.disease}</td>
              <td className="border px-4 py-2">{appointment.appointmentDate}</td>
              <td className="border px-4 py-2">{appointment.status}</td>
              <td className="border px-4 py-2">Canceled</td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default ViewAppointment;
