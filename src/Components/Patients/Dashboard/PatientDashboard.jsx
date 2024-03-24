import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const patient = {
  name: 'Jane Doe',
  age: 30,
  patientId: '12345',
  email: 'jane@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1544723216-8c4f3ff20f0e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const patientNavigation = [
  { name: 'Home', href: '/patienthome', current: true },
  { name: 'Appointments', href: '/appointmentbooking', current: false },
  { name: 'Medical Records', href: '/patientreports', current: false },
  { name: 'Billing', href: '/patientsbill', current: false },
];

const patientActions = [
  { name: 'Contact Doctor', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PatientDashboard() {
  return (
    <>
      <div className=" bg-hospital-primary mt-2 p-2">
        <Disclosure as="nav" className="bg-hospital-secondary bg-gray-400 text-blue-500">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <span className="text-lg font-bold">HealthHub</span>

                    <div className="hidden md:block ml-10">
                      {patientNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-blue-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="flex items-center ml-4">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <div className="ml-3">
                        <button
                          type="button"
                          className="flex items-center text-sm font-medium text-white focus:outline-none"
                        >
                          <img className="h-8 w-8 rounded-full" src={patient.imageUrl} alt={patient.name} />
                          <div className="ml-2">
                            <div className="font-medium text-white">{patient.name}</div>
                            <div className="text-sm text-gray-400">{`Age: ${patient.age}, ID: ${patient.patientId}`}</div>
                          </div>
                        </button>
                        {/* Dropdown menu */}
                        {open && (
                          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {patientActions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none"
                      onClick={() => open.toggle()}
                    >
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {open && (
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {patientNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pt-4 pb-3">
                      <div className="flex items-center px-5">
                        <img className="h-10 w-10 rounded-full" src={patient.imageUrl} alt={patient.name} />
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">{patient.name}</div>
                          <div className="text-sm font-medium leading-none text-gray-400">{`Age: ${patient.age}, ID: ${patient.patientId}`}</div>
                        </div>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {patientActions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </>
          )}
        </Disclosure>

        {/* <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Yaha profile ka setting dalana hai */}
          {/* </div> */}
        {/* </main> */ }
      </div>
    </>
  );
}
