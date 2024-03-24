import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:w-5/12">
          <img
            src="https://i.ibb.co/NY36PfH/About.jpg"
            alt="Hospital Image"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-7/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
          Your Health, Our Commitment: Welcome to HealthHub
          </h2>
          <p className="mt-6 text-gray-600">
          Welcome to HealthHub, your trusted partner in healthcare. We are dedicated to providing cutting-edge hospital management services, ensuring streamlined operations and exceptional patient care. With a focus on innovation, collaboration, and integrity, HealthHub is committed to creating a healthier community. Our modern facilities, experienced professionals, and commitment to excellence make us the preferred choice for comprehensive and compassionate healthcare. Your well-being is our priority at HealthHub Hospital Management.
          </p>
          <p className="mt-4 text-gray-600">
          Our modern facilities, experienced professionals, and commitment to excellence make us the preferred choice for comprehensive and compassionate healthcare. Your health is our priority at HealthHub Hospital Management.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}