import React from "react"
import Greeter from "../components/greeter"
import EventCarousel from "../components/EventCarroussel"

export default function Home() {
  return (
    <div className="h-full p-4">
      <div className="flex justify-center items-center">
        <img src="/unamur.jpg"></img>
        </div>
        Here you can find all the events happening at the university of Namur and around it, participate in them. You can also volonteer, in which case you'll win points you can use to buy free events later.

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <EventCarousel />
        </div>
    </div>
  )
}
