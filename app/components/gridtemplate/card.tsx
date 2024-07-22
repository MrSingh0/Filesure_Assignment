'use client'
import React from 'react'

const Card = ({ topic, img }: { topic: string, img: string }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
        {img ? <img src={img} alt={topic} className="w-6 h-6" /> : <span className="text-yellow-500">{/* Default icon or placeholder */}</span>}
      </div>
      <h3 className="text-lg font-semibold">{topic}</h3>
    </div>
  )
}

export default Card
