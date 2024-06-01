import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:w-5/12">
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="Hospital Image"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-7/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Elevate Your Hospital Management with React
          </h2>
          <p className="mt-6 text-gray-600">
            Transform your hospital operations with our dedicated team of React developers.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="mt-4 text-gray-600">
            Our experienced team ensures a seamless integration of React technology into your
            hospital management system. Nobis minus voluptatibus pariatur dignissimos libero
            quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
            mollitia.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}