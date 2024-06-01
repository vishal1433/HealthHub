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
import DoctorDashboard from './Components/Doctors/AboutDoctor/Dashboard/DoctorDashboard'
import DoctorCreateReport from './Components/Doctors/AboutDoctor/Dashboard/DoctorCreateReport'
import Prescriptions from './Components/Doctors/AboutDoctor/Dashboard/Prescriptions'
import DoctorBilling from './Components/Doctors/AboutDoctor/Dashboard/DoctorBilling'
import DoctorHome from './Components/Doctors/AboutDoctor/Dashboard/DoctorHome'
import ViewAppointment from './Components/Doctors/AboutDoctor/Dashboard/ViewAppointment'
import DoctorLogin from './Components/Doctors/AboutDoctor/DoctorLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'
import PatientList from './Components/Admin/PatientList'
import DoctorsList from './Components/Admin/DoctorsList'
import Analytics from './Components/Admin/Analytics'
import AppointmentTrendsChart from './Components/Admin/AppointmentTrendsChart'
import SideNavbar from './Components/Admin/SideNavbar'
import AdminLogin from './Components/Admin/AdminLogin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path ='/home' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='faqs' element={<FAQs />} />
      <Route path='admindashboard' element={<AdminDashboard/>}/>
      <Route path='adminlogin' element={<AdminLogin/>}/>
      <Route path='patientlist' element={<PatientList/>}/>
      <Route path='doctorlist' element={<DoctorsList/>}/>
      <Route path='analytics' element={<Analytics/>}/>
      <Route path='chart' element={<AppointmentTrendsChart/>}/>
      <Route path='sidenavbar' element={<SideNavbar />} />   
      <Route path='appointmentbooking' element={<AppointmentBooking />} />
      <Route path='doctordashboard' element={<DoctorDashboard/>}> </Route>
      <Route path='prescriptions' element={<Prescriptions/>}/>
      <Route path='billing' element={<DoctorBilling/>}/>
      <Route path='viewappointment' element={<ViewAppointment />} />
      <Route path='doctorhome' element={<DoctorHome/>}/>
      <Route path='doctorlogin' element={<DoctorLogin/>}/>
      <Route path='doctorcreatereport' element={<DoctorCreateReport/>}/>
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