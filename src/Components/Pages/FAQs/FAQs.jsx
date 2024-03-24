// src/components/FAQ.js
import React from 'react';
import { Disclosure } from '@headlessui/react';

const faqs = [
  {
    question: '1. What services does the hospital provide?',
    answer: (
      <>
        <ul>
          <li><span className='text-lg font-bold '>Emergency Care:</span> Immediate treatment for acute illnesses and injuries.</li><br/>
          <li><span className='text-lg font-bold '>Inpatient and Outpatient Care:</span> Hospitalization and non-hospital medical services.</li><br/>
          <li><span className='text-lg font-bold '>Surgical Services:</span> Various surgeries performed by qualified surgeons.</li><br/>
          <li><span className='text-lg font-bold '>Diagnostic and Imaging Services:</span> Tests and imaging for diagnosis.</li><br/>
          <li><span className='text-lg font-bold '>Maternity, Pediatric, and Obstetric Services:</span> Care for mothers, infants, and children.</li><br/>
          <li><span className='text-lg font-bold '>Cardiology and Oncology Services:</span> Heart and cancer-related care.</li><br/>
          <li><span className='text-lg font-bold '>Neurology Services:</span> Treatment for nervous system disorders.</li><br/>
          <li><span className='text-lg font-bold '>Intensive Care Unit (ICU):</span> Specialized care for critically ill patients.</li><br/>
        </ul>
      </>
    ),
  },
  {
    question: '2. How can I make an appointment?',
    answer: (
      <>
        <p>
          For making an appointment or finding a doctor, you can visit the login or registration page. Create a new account if you are a new user, or log in if you already have an account, and proceed to make your appointment.
        </p>
      </>
    ),
  },
  {
    question: '3. What are the hospital\'s visiting hours?',
    answer: (
      <>
        <p>
          Visiting hours at our hospital are typically from [start time] to [end time] every day. However, exceptions may apply in certain units or during specific circumstances.
        </p>
      </>
    ),
  },
  {
    question: '4. What insurance plans are accepted?',
    answer: (
      <>
        <p>
          Our hospital accepts a wide range of insurance plans to ensure accessibility for our patients.
        </p>
      </>
    ),
  },
  {
    question: '5. What is the hospital\'s address and contact information?',
    answer: (
      <>
        <p>
          Include the physical address, phone number, and email address for general inquiries.
        </p>
      </>
    ),
  },
  {
    question: '6. How can I find a doctor or specialist?',
    answer: (
      <>
        <p>
          Use our appointment scheduling platform available on our website.
        </p>
      </>
    ),
  },
  {
    question: '7. What should I bring for my hospital visit?',
    answer: (
      <>
        <ul>
          <li>Medical Records: Relevant medical records, test results, and a list of current medications.</li>
          <li>Personal Items: Comfortable clothing, toiletries, and personal items for an overnight stay.</li>
          <li>List of Allergies: Clearly communicate any allergies to medications or other substances.</li>
        </ul>
      </>
    ),
  },
  {
    question: '8. What are the payment options and billing procedures?',
    answer: (
      <>
        <p>
          We offer various payment options, including online payments through our secure portal, by phone, mail, or in person at our billing office. Accepted payment methods typically include credit/debit cards, checks, and electronic funds transfer.
        </p>
      </>
    ),
  },
  {
    question: '9. Is there parking available, and what are the fees?',
    answer: (
      <>
        <p>
          Yes, we provide convenient parking facilities for patients, visitors, and staff.
        </p>
      </>
    ),
  },
  {
    question: '10. What are the hospital\'s policies on patient confidentiality?',
    answer: (
      <>
        <p>
          Patient confidentiality is a top priority. We strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) regulations to safeguard your health information.
        </p>
      </>
    ),
  },
  {
    question: '11. How can I access my medical records?',
    answer: (
      <>
        <p>
          We offer secure online portals where you can access certain parts of your medical records. Please inquire with our registration or medical records department to set up your online access.
        </p>
      </>
    ),
  },
  {
    question: '12. What amenities are available for patients and visitors?',
    answer: (
      <>
        <p>
          We offer dining facilities where patients and visitors can purchase meals. Our cafeterias or dining areas provide a variety of options to suit different preferences, and we provide comfortable waiting areas for visitors throughout the hospital.
        </p>
      </>
    ),
  },
  {
    question: '13. What should I do in case of an emergency?',
    answer: (
      <>
        <p>
          In the event of a medical emergency, call 911 or your local emergency number immediately. Seek professional help as soon as possible.
        </p>
      </>
    ),
  },
];

const FAQs = () => {
  return (
    <div className='px-5 py-4 '>
      <h1 className='text-2xl text-blue-400 text-center font-bold text-slate-500 hover:text-pink-500 mb-4  offset-6 underline decoration-4 '>FAQs</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span className="font-medium">{faq.question}</span>
                  <span>{open ? '-' : '+'}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 bg-white">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQs;
