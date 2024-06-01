import React from 'react'
import { Link } from 'react-router-dom';

const servicesData = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Comprehensive heart care with state-of-the-art facilities.',
      imageSrc: 'https://i.ibb.co/2vY36cQ/Cardiologye.jpg', 
    },
    {
      id: 2,
      title: 'Orthopedics',
      description: 'Specialized care for bone and joint health.',
      imageSrc: 'https://i.ibb.co/x2WxPWT/Orthopedics.jpg', 
    },
    {
      id: 3,
      title: 'Pediatrics',
      description: 'Caring for the health and well-being of children.',
      imageSrc: 'https://i.ibb.co/Hgq3Pds/Pediatrics.jpg', 
    },
    // Add more services as needed
  ];

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-white-900 py-24 sm:py-32">
          {<img
          src="https://i.ibb.co/0XM2dbr/baground-image.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center backdrop-blur"
        /> }
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Join Our Hospital Team </h2>
          <p className="mt-6 text-lg leading-8 text-black-900">
            Explore exciting career opportunities and be a part of our dedicated healthcare team. We prioritize patient
            care and strive for excellence in all aspects of medical service.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black-900 lg:gap-x-10">
            <div className="mb-8 sm:mb-0">
              <Link to="/doctor" className="block border border-gray-600 rounded-lg p-4 hover:bg-white hover:text-black-900 transition duration-300">
                View Doctors <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="mb-8 sm:mb-0">
              <Link to="/appointment" className="block border border-gray-600 rounded-lg p-4 hover:bg-white hover:text-black-900 transition duration-300">
                Make Appointment <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Statistics Section - Half Width */}
          <dl className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-black-300">Hospital Locations</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Multiple</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-black-300">Medical Professionals</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black">500+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-black-300">Emergency Response</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black">24/7</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-black-300">Patient Care</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Priority</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="py-16 bg-white-900 text-black-900">
      <div className="container mx-auto px-6 text-center">
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-md shadow-md">
                <img src={service.imageSrc} alt={service.title} className="mb-4 rounded-md" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      
    </div>
    
    
    );
}