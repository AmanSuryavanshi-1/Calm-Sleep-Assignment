import React from 'react';
import DashboardItem from './DashboardItem';
import image1 from '../Image1.jpg'
import image2 from '../Image2.jpeg'
import image3 from '../Image3.jpg'
import image4 from '../Image4.jpg'
import image5 from '../Image5.jpg'
import image6 from '../Image6.jpg'

const Dashboard = () => {
  const items = [
    {
      image: image5,
      title: 'Guided Meditation Lightsleep',
      uniquePlays: [43, 62, 17, 51, 28, 19, 36, 8, 24, 39, 57, 46],
totalPlays: [58, 21, 14, 33, 49, 27, 37, 9, 45, 31, 54, 22],
downloadRate: [47, 13, 40, 26, 32, 42, 56, 29, 44, 59, 25, 30],
clickRate: [38, 35, 11, 53, 41, 34, 61, 50, 16, 60, 12, 55],
      completionRate: 65,
    },
    {
        image: image6,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [31, 41, 22, 38, 52, 49, 16, 27, 36, 44, 10, 19],
        totalPlays: [53, 32, 43, 17, 26, 35, 20, 11, 29, 39, 12, 24],
        downloadRate: [50, 21, 30, 42, 46, 33, 59, 14, 57, 40, 23, 48],
        clickRate: [56, 15, 45, 25, 37, 18, 28, 51, 34, 47, 55, 13],
        completionRate: 75,
      },
      {
        image: image1,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [12, 41, 23, 30, 48, 55, 19, 33, 27, 44, 15, 39],
totalPlays: [29, 25, 38, 52, 14, 46, 21, 17, 37, 42, 11, 36],
downloadRate: [50, 10, 57, 49, 31, 24, 22, 35, 16, 40, 43, 26],
clickRate: [51, 20, 56, 13, 32, 18, 34, 45, 28, 47, 53, 36],
        completionRate: 80,
      },
      {
        image: image2,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [10, 15, 20, 18, 12, 13, 19 , 14, 15, 18, 19, 11], 
        totalPlays: [50, 60, 70, 65, 55,13, 19 , 14, 15, 18, 19, 11], 
        downloadRate: [50, 60, 70, 65, 55,10, 15, 20, 18, 12,16,23],
      clickRate:[50, 60, 70, 65, 55,10, 15, 20, 18, 12,16,23],
        completionRate: 90,
      },
      {
        image: image3,
        title: 'Guided Meditation Lightsleep',
        uniquePlays: [16, 23, 41, 19, 49, 27, 44, 10, 39, 33, 12, 30],
totalPlays: [11, 25, 14, 52, 46, 38, 29, 37, 42, 48, 21, 35],
downloadRate: [35, 43, 16, 50, 26, 19, 40, 57, 31, 24, 22, 10],
clickRate: [34, 18, 13, 53, 47, 45, 36, 20, 51, 28, 56, 32],
        completionRate: 30,
      },
    {
      image: image4,
      title: 'Guided Meditation Lightsleep',
      uniquePlays: [35, 20, 17, 41, 33, 30, 54, 23, 27, 12, 39, 15],
totalPlays: [29, 48, 42, 21, 14, 46, 38, 52, 37, 11, 44, 25],
downloadRate: [49, 57, 10, 40, 22, 16, 31, 26, 43, 50, 24, 19],
clickRate: [45, 56, 13, 51, 18, 20, 28, 32, 36, 34, 53, 47],
      completionRate: 50,
    },
    
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
