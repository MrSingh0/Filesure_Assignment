"use client";
import React from 'react';
import Card from './Card';

const data = [
  {
    topic: "Analysis",
    content: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    img: "/plan.png"
  },
  {
    topic: "Design",
    content: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    img: "/design.png",
  },
  {
    topic: "Development",
    content: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    img: "/computer_coding.png",
  }
];

const LeftCard = () => {
  return (
    <div className='flex flex-col justify-between w-96 mt-4' style={{ height: '564px' }}>
      {data.map((item, key) => (
        <Card key={key} topic={item.topic} content={item.content} img={item.img} />
      ))}
    </div>
  );
};

export default LeftCard;
