"use client";
import React from 'react';
import Card from './Card';

const data = [
  {
    topic: "Testing",
    content: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions",
    img: "/security.png"
  },
  {
    topic: "Launching",
    content: "We design the application page and publish it in the App Store and Google Play stores.",
    img: "/hosting.png",
  },
  {
    topic: "Support",
    content: "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    img: "/mobile_setting.png",
  }
];

const RightCard = () => {
  return (
    <div className='flex flex-col justify-between w-96 mt-4' style={{ height: '564px' }}>
      {data.map((item, key) => (
        <Card key={key} topic={item.topic} content={item.content} img={item.img} />
      ))}
    </div>
  );
};

export default RightCard;
