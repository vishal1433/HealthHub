import React from 'react'
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import AboutDoctor from '../../Doctors/AboutDoctor/AboutDoctor';
import FAQs from '../FAQs/FAQs';



export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-white-900  ">

         {/* ----------ImageText Component start by Lalmohan---------  */}
  <div
  className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center pb-14"
  style={{ backgroundImage: 'url(https://i.ibb.co/XZCkmk0/Header-Image.jpg)' }}>

    <div className="absolute inset-0  opacity-50 m"></div>
     <div className="relative z-10 text-Black text-center lg:flex lg:items-center">
        <div className="lg:w-1/2 p-8 mt-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay Healthy, Stay Happy
          </h1>
          <p className="text-lg">
            Welcome to our hospital, where your well-being is our top priority. We are dedicated to providing exceptional healthcare services with a focus on personalized care and a healing environment.
          </p>
        </div>  
     </div>
    <div className="lg:flex lg:flex-row lg:items-center lg:w-full lg:max-w-3xl xl:max-w-4xl  mt-8">
    <div className="mb-6 mr-4 flex flex-col items-center">
      <img src="https://i.ibb.co/YyDvvCM/bedpng.png" alt="Emergency Icon" className="w-20 h-20 rounded-full bg-white p-2 shadow-md" />
      <p className="text-red-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Emergency</p>
      <p className="text-black text-center text-sm lg:text-base whitespace-nowrap">Services</p>
    </div>
    <div className="mb-6 mr-4 flex flex-col items-center ml-8">
      <img src="https://i.ibb.co/rd6fSsk/Amblunce.webp" alt="Ambulance Icon" className="w-20 h-20 rounded-full bg-white p-2 shadow-md" />
      <p className="text-green-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Free</p>
      <p className="text-black text-center text-sm lg:text-base whitespace-nowrap">Ambulance</p>
    </div>
    <div className="mb-6 mr-4 flex
    flex-col items-center ml-8">
      <img src="https://i.ibb.co/N22zVkN/docto.png" alt="Call Icon" className="w-20 h-20 rounded-full bg-white p-2 shadow-md mt-2" />
      <p className="text-blue-500 mt-4 text-center text-sm lg:text-base whitespace-nowrap">Qualified</p>
      <p className="text-black text-center text-sm lg:text-base whitespace-nowrap">Doctor</p>
    </div>
  </div>
  </div>

    {/* ---------ImageText Component End by Lalmohan-------  */}
      
      <div> <Services/> </div>
      <div><AboutDoctor/></div> 
      <div><FAQs/></div>        
    </div>
    
    
    );
}