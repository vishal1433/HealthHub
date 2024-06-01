// DoctorPage.js
import React from 'react';

function Doctor() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      experience: '10 years',
      imageUrl: 'https://i.ibb.co/djddCcf/Dr-John-Doe.jpg', // Add image URLs for each doctor
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Pediatrician',
      experience: '8 years',
      imageUrl: 'https://i.ibb.co/3p9WJtG/Dr-Jane-Smith.jpg', // Add image URLs for each doctor
    },
    // Add more doctors as needed
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-gray-100 p-6 rounded-md relative overflow-hidden">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-40 object-cover rounded-md "
            />

              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-700 mb-2">{doctor.specialization}</p>
              <p className="text-gray-700">{`${doctor.experience} of experience`}</p>
              {/* Add more details about the doctor as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
