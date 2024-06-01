
import React from 'react';

function AboutDoctor() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      specialization: 'Pediatrician',
      experience: '8 years',
      imageUrl: 'https://i.ibb.co/VDXgJGR/f-doc1-1.png', 
    },
    
      {
        id: 2,
        name: 'Dr. John Doe',
        specialization: 'Orthopedic Surgeon',
        experience: '15 years',
        imageUrl: 'https://i.ibb.co/MhjF8rX/m-doc1-1.png', 
      },
      {
        id: 3,
        name: 'Dr. Emily Johnson',
        specialization: 'Cardiologist',
        experience: '12 years',
        imageUrl: 'https://i.ibb.co/JpPWGRH/m-doc2-1.png', 
      },
    
    
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 ">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-gray-100 p-6 rounded-md relative overflow-hidden">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="object-scale-down w-20 h-20 rounded-full bg-white  shadow-md  "
            />

              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-700 mb-2">{doctor.specialization}</p>
              <p className="text-gray-700">{`${doctor.experience} of experience`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDoctor;
