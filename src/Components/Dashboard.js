import React from 'react';
import DashboardItem from './DashboardItem';
// import image from '../Logo.png'
import image1 from '../Image1.jpg'
import image2 from '../Image2.jpeg'
import image3 from '../Image3.jpg'
import image4 from '../Image4.jpg'
import image5 from '../Image5.jpg'
import image6 from '../Image6.jpg'

const Dashboard = () => {
  // Mocked data for testing
  const items = [
    {
      image: image5,
      title: 'Guided Meditation Lightsleep',
      uniquePlays: [10, 15, 20, 18, 12,50, 60, 70, 65, 55,16,23], // Sample unique plays data for each month
      totalPlays: [50, 60, 70, 65, 55,10, 15, 20, 18, 12,16,23],
      completionRate: '65%',
    },
    {
        image: image6,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], // Sample unique plays data for each month
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11],  // Sample total plays data for each month  
        completionRate: '75%',
      },
      {
        image: image1,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], // Sample unique plays data for each month
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11], // Sample total plays data for each month  
        completionRate: '80%',
      },
      {
        image: image2,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], // Sample unique plays data for each month
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11], // Sample total plays data for each month  
        completionRate: '90%',
      },
      {
        image: image3,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], // Sample unique plays data for each month
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11], // Sample total plays data for each month  
        completionRate: '30%',
      },
    {
      image: image4,
      title: 'Guided Meditation Lightsleep',
      uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], // Sample unique plays data for each month
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11], // Sample total plays data for each month  
      completionRate: '50%',
    },
    // Add more items as needed
  ];

  return (
    <div>
      {items.map((item, index) => (
        <DashboardItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Dashboard;
