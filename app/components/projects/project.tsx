'use client'
import React from 'react'
import Link from 'next/link'

const Project = () => {
  return (
    <div className="space-y-4 font-medium text-base mt-11">
      <Link href="">
        <span className="underline decoration-yellow-500 decoration-3 mr-3 hover: cursor-pointer  ">Project 1</span>
      </Link>
      <Link href="">
        <span className="mr-3  hover:underline cursor-pointer decoration-yellow-500 decoration-2">Project 2</span>
      </Link>
      <Link href="">
        <span className="mr-3  hover:underline cursor-pointer  decoration-yellow-500 decoration-2">Project 3</span>
      </Link>
      <Link href="">
        <span className="mr-3  hover:underline cursor-pointer  decoration-yellow-500 decoration-2">Project 4</span>
      </Link>
    </div>
  )
}

export default Project