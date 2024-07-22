'use client'
import React from 'react'
import Card from './card'

const data = [
    {
        topic: "Social media",
        img: "/dfirst.png",
    },
    {
        topic: "Education",
        img: "/education.png",
    },
    {
        topic: "AR technology",
        img: "/AR.png",
    },
    {
        topic: "Fitness and sport",
        img: "/fitness.png",
    },
    {
        topic: "Auto , transport",
        img: "/carout.png",
    },
    {
        topic: "TV series",
        img: "/TV.png",
    },
    {
        topic: "Bank",
        img: "/bank.png",
    },
    {
        topic: "Medicine, health",
        img: "/health.png",
    },
    {
        topic: "Startups",
        img: "/startup.png",
    },
    {
        topic: "Construction",
        img: "/construction.png",
    },
    {
        topic: "Restaurants, food delivery",
        img: "/restaurants.png",
    },
    {
        topic: "Religion",
        img: "/Religion.png",
    },
    {
        topic: "Game projects",
        img: "/game.png",
    },
    {
        topic: "Marketplaces",
        img: "/market.png",
    },
    {
        topic: "Online course",
        img: "/online.png",
    }
]

const GridTemp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {
        data.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <Card topic={item.topic} img={item.img} />
          </div>
        ))
      }
    </div>
  )
}

export default GridTemp
