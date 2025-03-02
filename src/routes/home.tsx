import React from "react"
import EventCarousel from "../components/EventCarroussel"
import EventDetail from "./event"

export default function Home() {
  return (
    <div className="h-full p-4">
      <div className="flex justify-center items-center">
        
        </div>
        <br></br>
        <div className="bg-gray-100 flex justify-center items-center bg-white p-6 rounded-2xl shadow-lg">
          <EventCarousel />
        </div>
    </div>
  )
}
