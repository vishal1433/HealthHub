
import React from 'react';
import { Link} from 'react-router-dom';


function PatientRule() {
  return (
    <div className="min-h-screen flex justify-items-center justify-center ">
      <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl text-center font-bold mb-8">General instructions to book online appointments for New Patient (First time to HealthHub)</h1>

      <ol className='mx-auto block ml-8 mr-8'>
        <li className="mb-4">
          1. For in-patient admission, a female attendant is mandatory.
          <br />
          - यदि रोगी को भर्ती की आवश्यकता होती है तो एक महिला सेवक अनिवार्य है।
        </li>
      
        <li className="mb-4">
          2. Enter original data as it is a legal document.
          <br />
          - Enter information as per your valid ID proof.
          <br />
          कृपया मूल जानकारी (डाटा) दर्ज करें क्यों कि ये कानूनी दस्तावेज है। आपके वैध पहचान पत्र के अनुसार दर्ज करें।
        </li>
      
        <li className="mb-4">
          3. If you have already registered for one unit or have an old hospital number, use the same hospital number for registration. Avoid creating a new registration.
          <br />
          - यदि आपके पास "पहले से एक इकाई (यूनिट) के लिए पंजीकृत है" (और) "पुराना अस्पताल नंबर है" तो कृपया पंजीकरण के लिए उसी अस्पताल नंबर का उपयोग करें, एक और नया पंजीकरण न करें।
        </li>
      
        <li className="mb-4">
          4. The year of birth is crucial for booking repeat appointments. Keep it confidential to prevent misuse.
          <br />
          - दुबारा नियुक्ति (बुकिंग ) करने के लिए जन्म का वर्ष बहुत -बहुत अनिवार्य है, इसलिए इसके दुरुपयोग से बचने के लिए इसे गोपनीय रखें।
        </li>
      
        <li className="mb-4">
          5. Collect your Hospital Number Card from ISSCC Building. Show it everywhere in CMC if needed.
          <br />
          - अपना हॉस्पिटल नंबर कार्ड आई एस सी सी बिल्डिंग से एकत्रित करें। जहाँ-कही पर भी आवश्यकता होने पर इसे दिखाये।
        </li>
      
        <li className="mb-4">
          6. Deposit cash in OPAD (OP Advance) to avail cashless service.
          <br />
          - ओ पी ए डी (ओ पी अग्रिम) में रुपया जमा करें और कैशलेस सेवा के लिए इसका उपयोग करें।
        </li>
      
        <li className="mb-4">
          7. If your doctor is on unavoidable emergency leave on the day of your appointment, you will be seen by another doctor.
          <br />
          - यदि आपका डॉक्टर आपकी नियुक्ति (अपायमेन्ट) के दिन अनिवार्य आपातकालीन छुट्टी पर है, तो आपको अन्य डॉक्टर द्वारा देखा जाएगा।
        </li>
      
        <li className="mb-4">
          8. To make an appointment, start by signing up as a patient. After that, just log in, and you'll be all set to book your appointment hassle-free!
          <br />
          - Appointment लेने के लिए, पहले मरीज के रूप में साइन अप करें। उसके बाद,  लॉग इन करें, और फिर आप बिना किसी परेशानी के अपनी Appointment को बुक कर सकेंगे!
        </li>
      
        <li className="mb-4">
          9. As per Income tax regulation (U/s 269ST & 271DA), cash payments of Rs 2 Lakhs and above per day cannot be accepted. Use DD/Net Banking/Debit card/Credit card for amounts exceeding this limit.
        </li>
      </ol>


      <div className="flex items-center justify-center lg:order-2">
              <Link
                  to="/patientreg"
                  className="text-gray-800 bg-green-400 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                  Sign Up
              </Link>

              <Link
                  to="/bookappointment"
                  className="text-white bg-cyan-700 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                  Book Appointment
              </Link>
                     
         </div>

      </div>
    </div>
  );
}

export default PatientRule;
