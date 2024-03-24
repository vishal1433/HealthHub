import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import PatientLogin from './Components/Patients/Login/PatientLogin'
import PatientReg from './Components/Patients/Login/PatientReg'
import AboutDoctor from './Components/Doctors/AboutDoctor/AboutDoctor'
import Services from './Components/Pages/Services/Services'
import PatientRule from './Components/Patients/Appointment/PatientRule'
import FAQs from './Components/Pages/FAQs/FAQs'
import PatientDashboard from './Components/Patients/Dashboard/PatientDashboard'
import AppointmentBooking from './Components/Patients/Appointment/AppointmentBooking'
import PatientReports from './Components/Patients/Reports/PatientReports'
import PatientsBill from './Components/Patients/Reports/PatientsBill'
import PatientHome from './Components/Patients/Dashboard/PatientHome'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path ='/home' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='faqs' element={<FAQs />} />
      <Route path='appointmentbooking' element={<AppointmentBooking />} />
      <Route path='patientrule' element={<PatientRule/>}/>
      <Route path='patientdashboard' element={<PatientDashboard/>}/>
      <Route path='patientreports' element={<PatientReports/>}/>
      <Route path='patientsbill' element={<PatientsBill/>}/>
      <Route path='patienthome' element={<PatientHome/>}/>
      <Route path='login' element={<PatientLogin/>}/>
      <Route path='patientreg' element={<PatientReg/>}/>
      <Route path='doctor' element={<AboutDoctor/>}/>
      <Route path='services' element={<Services/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)