import React from "react"
import Greeter from "../components/greeter"
import EventCarousel from "../components/EventCarroussel"

export default function Home() {
  return (
    <div className="h-full p-4">

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <EventCarousel />
        </div>

    </div>
  )
}
