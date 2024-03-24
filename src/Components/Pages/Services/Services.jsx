import React from 'react'

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

export default function Services() {
    return (
        <div className="relative isolate overflow-hidden bg-white-900 py-2 sm:py-2">
           <div className="py-2 bg-white-900 text-black-900">
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