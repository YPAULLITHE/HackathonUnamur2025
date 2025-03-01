import React from "react"
import EventCarousel from "../components/EventCarroussel"
import EventDetail from "./event"

export default function Home() {
  return (
    <div className="h-full p-4"><h2 className="text-center text-2xl font-semibold mb-4">
    Here you can find all the events happening at the university of Namur and around it, participate in them.<br></br>
    You can also volonteer, in which case you'll win points you can use to buy free events later.
  </h2>
      <div className="flex justify-center items-center">
        <img src="/unamur.jpg"></img>
        </div>
        

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <EventCarousel />
        </div>
    </div>
  )
}
