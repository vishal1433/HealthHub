import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';
import ViewAppointment from '../Doctors/AboutDoctor/Dashboard/ViewAppointment';

const AdminDashboard = () => {
  const [appointments] = useState([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', dateTime: '2024-05-11 10:00 AM', status: 'Pending' },
    { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Jones', dateTime: '2024-05-12 2:00 PM', status: 'Confirmed' },
    { id: 3, patientName: 'Mike Lee', doctorName: 'Dr. Williams', dateTime: '2024-05-13 4:00 PM', status: 'Completed' },
    { id: 4, patientName: 'Emma Brown', doctorName: 'Dr. Green', dateTime: '2024-05-14 9:00 AM', status: 'Pending' },
    { id: 5, patientName: 'Olivia Black', doctorName: 'Dr. Grey', dateTime: '2024-05-15 11:00 AM', status: 'Confirmed' },
    { id: 6, patientName: 'Noah Wilson', doctorName: 'Dr. Blue', dateTime: '2024-05-16 1:00 PM', status: 'Completed' },
    { id: 7, patientName: 'Liam Johnson', doctorName: 'Dr. White', dateTime: '2024-05-17 3:00 PM', status: 'Pending' },
    { id: 8, patientName: 'Sophia Davis', doctorName: 'Dr. Black', dateTime: '2024-05-18 8:00 AM', status: 'Confirmed' },
    { id: 9, patientName: 'Ava Martinez', doctorName: 'Dr. Silver', dateTime: '2024-05-19 10:30 AM', status: 'Completed' },
    { id: 10, patientName: 'William Garcia', doctorName: 'Dr. Brown', dateTime: '2024-05-20 2:30 PM', status: 'Pending' },
    { id: 11, patientName: 'Isabella Rodriguez', doctorName: 'Dr. Azure', dateTime: '2024-05-21 4:00 PM', status: 'Confirmed' },
    { id: 12, patientName: 'Mason Lee', doctorName: 'Dr. Maroon', dateTime: '2024-05-22 9:15 AM', status: 'Completed' },
    { id: 13, patientName: 'Ethan Young', doctorName: 'Dr. Rose', dateTime: '2024-05-23 11:45 AM', status: 'Pending' },

  ]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideNavbar />
      <div className="flex-1 overflow-auto p-4 bg-gradient-to-br from-blue-500 to-indigo-600">

        <ViewAppointment />

        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-white-500">Recent Patients</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-green-800 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-green-800 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 bg-green-800 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 bg-green-800 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">35</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">123 Main St, City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 11, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">28</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">456 Elm St, Town</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 12, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">35</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">123 Main St, City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 11, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">28</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">456 Elm St, Town</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 12, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mike Lee</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">789 Oak Ave, Village</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 13, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alice Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">567 Pine Rd, Suburb</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 14, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bob Anderson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">321 Cedar Blvd, Town</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 15, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Eva Martinez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">876 Maple Ln, City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 16, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sam Wilson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">37</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">543 Oak Ave, Suburb</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 17, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lily Brown</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">29</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">890 Elm St, Village</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 18, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oliver White</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">48</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">765 Pine Rd, Town</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 19, 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emma Black</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">42</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">654 Cedar Blvd, Suburb</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 20, 2024</td>
              </tr>

            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
};

export default AdminDashboard;