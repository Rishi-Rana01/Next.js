"use client"
import React from 'react'

const error = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center flex items-center justify-center h-screen hover:text-red-400">500 - Server Error</h1>
      <p className="text-lg text-gray-600 mt-4">Something went wrong on our end. Please try again later.</p>
    </div>
  )
}

export default error
