import React, { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const patientNavigation = [
  { name: 'Home', href: '/patienthome' },
  { name: 'Appointments', href: '/appointmentbooking' },
  { name: 'Medical Records', href: '/patientreports' },
  { name: 'Billing', href: '/patientsbill' },
];

const handleSignOut = () => {
  console.log('Signing out...');
  window.location.href = '/login';
};

export default function PatientDashboard() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-900 text-white">
      <div className="bg-hospital-primary mt-2 p-2 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="text-lg font-bold">HealthHub</span>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-blue-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <div className="hidden md:flex justify-center space-x-4 md:justify-start md:ml-10">
            {patientNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`${
                  activeItem === item.name ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } rounded-md px-3 py-2 text-sm font-medium`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hidden md:block">
              Sign Out
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          as={Fragment} // Specify the element to render as
        >
          <div className="absolute inset-x-0 top-full md:hidden bg-hospital-primary z-10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {patientNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                  className={`${
                    activeItem === item.name ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block px-3 py-2 text-base font-medium rounded-md`}
                >
                  {item.name}
                </a>
              ))}
              <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg w-full">
                Sign Out
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
