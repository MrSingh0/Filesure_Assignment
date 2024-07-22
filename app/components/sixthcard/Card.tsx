"use Client"

import React from 'react'

type CardProps = {
  topic: string;
  content: string;
  img: string;
};

const Card = ({topic, content, img}: CardProps) => {
    return (
        <div className="flex flex-col items-start p-6 max-w-sm border-gray-200 rounded-xl shadow-md"
        style={{ height: '172px', width: '392px', gap:'16px', backgroundImage: 'linear-gradient(to right, white, white, white, white, rgba(196, 220, 196, 0.944)' }}
        >
        <div className="flex items-center mb-4 w-36 h-12">
          <img
            src={img}
            alt="Checkmark"
            className="w-10 h-10 text-green-500"
          />
          <h2 className="ml-2 text-xl font-semibold">{topic}</h2>
        </div>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    );
  };

export default Card;
  
  