import React from 'react';
import AppointmentTrendsChart from './AppointmentTrendsChart';
import SideNavbar from './SideNavbar';

const Analytics = () => {
    const analyticsData = [
        { title: 'Total Appointments', value: 120 },
        { title: 'Pending Appointments', value: 25 },
        { title: 'Completed Appointments', value: 80 },
        { title: 'Cancelled Appointments', value: 15 },
        { title: 'Total Patients', value: 300 },
        { title: 'Doctors On Duty', value: 12 },
        { title: 'Total Profit', value: '$20000' },
        { title: 'Total Revenue', value: '$70,000' },
    ];

    return (
        <div className="flex flex-col lg:flex-row h-screen">

            <SideNavbar />
            <div className="flex-1 overflow-auto p-4 bg-gradient-to-br from-blue-500 to-indigo-600">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg rounded-lg p-4 mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">Analytics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                        {analyticsData.map((data, index) => (
                            <div key={index} className="bg-blue-500 p-4 rounded-md shadow-md">
                                <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                                <p className="text-3xl font-bold">{data.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-md rounded-md p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2 text-white">Revenue Breakdown</h2>
                    <div className="grid grid-cols-2 gap-4 text-white">
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Consultation Fees</h3>
                            <p className="text-xl font-bold">$10,000</p>
                        </div>
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Staff Salary</h3>
                            <p className="text-xl font-bold">$15,000</p>
                        </div>
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Medication Sales</h3>
                            <p className="text-xl font-bold">$40,000</p>
                        </div>
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Doctor Salary</h3>
                            <p className="text-xl font-bold">$25,000</p>
                        </div>
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Other Revenue</h3>
                            <p className="text-xl font-bold">$20,000</p>
                        </div>
                        <div className="bg-green-600 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-bold mb-2">Maintenance</h3>
                            <p className="text-xl font-bold">$10,000</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-300 via-blue-100 to-purple-200 shadow-lg rounded-lg p-4 mb-4">
                    <AppointmentTrendsChart />
                </div>

            </div>
        </div>
    );
};

export default Analytics;
