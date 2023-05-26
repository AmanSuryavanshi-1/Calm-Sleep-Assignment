import React from 'react';
import './DashboardItem.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DashboardItem = ({ image, title, uniquePlays, totalPlays, completionRate,months }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct', 'Nov','Dec'],
    datasets: [
      {
        label: 'Unique Plays',
        data: uniquePlays,
        backgroundColor: '#fc9614',
        borderColor: 'black',
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Total Plays',
        data: totalPlays,
        backgroundColor: '#EEEEEE',
        borderColor: 'black',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };
  
  return (

    <div className='body'>
      <h2>{title}</h2>
      <div className='table-container'>
        <img className='image' src={image} alt={title} />
        
        <table>
        <tbody>
          <tr>
          <th>Month</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>Aug</th>
            <th>Sept</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
            
          </tr>
          <tr>
            <th>Unique Plays</th>
            {Array.from(uniquePlays).map((data, index) => (
              <td key={index}>{data} K</td>
            ))}
          </tr>
          <tr>
            <th>Total Plays</th>
            {Array.from(totalPlays).map((data, index) => (
              <td key={index}>{data} M</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>


    <p> <b>Completion Rate: {' '}
  {completionRate &&
    Array.from(String(completionRate)).map((data, index) => (
      <span key={index}>{data}</span>
    ))}
    </b></p>

    <div className="progress-bar">
          <div className="progress" style={{ width: `${completionRate}%` }} />
          </div>


        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
  );
};

export default DashboardItem;

