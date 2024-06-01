import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AppointmentTrendsChart = () => {
  const [chartData, setChartData] = useState({
    appointments: [],
    cancelled: [],
    confirmed: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = {
          appointments: [
            { month: 'January', number: 10 },
            { month: 'February', number: 20 },
            { month: 'March', number: 15 },
            { month: 'April', number: 25 },
            { month: 'May', number: 30 },
          ],
          cancelled: [
            { month: 'January', number: 2 },
            { month: 'February', number: 3 },
            { month: 'March', number: 1 },
            { month: 'April', number: 4 },
            { month: 'May', number: 5 },
          ],
          confirmed: [
            { month: 'January', number: 8 },
            { month: 'February', number: 17 },
            { month: 'March', number: 14 },
            { month: 'April', number: 21 },
            { month: 'May', number: 25 },
          ]
        };

        setChartData({
          appointments: apiResponse.appointments.map(data => data.number),
          cancelled: apiResponse.cancelled.map(data => data.number),
          confirmed: apiResponse.confirmed.map(data => data.number)
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.appointments.length > 0) {
      renderChart();
    }
  }, [chartData]);

  const renderChart = () => {
    const ctx = document.getElementById('appointmentTrendsChart');
    const months = ['January', 'February', 'March', 'April', 'May'];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Appointments',
            data: chartData.appointments,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Cancelled',
            data: chartData.cancelled,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Confirmed',
            data: chartData.confirmed,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 shadow-lg rounded-lg p-5 mb-5">
      <h2 className="text-2xl font-bold mb-3 text-white-500">Appointment Trends</h2>
      <canvas id="appointmentTrendsChart" width="300" height="80"></canvas>
    </div>
  );
};

export default AppointmentTrendsChart;
