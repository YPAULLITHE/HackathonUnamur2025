import React from "react"
import EventCarousel from "../components/EventCarroussel"
import EventDetail from "./event"

export default function Home() {
  return (
    <div className="h-full p-4"><h2 className="text-center text-2xl font-semibold mb-4">
    Ici vous pouvez trouver tous les evenements de l'université de Namur et autour pour y participer.<br></br>
    Il est aussi possible d'y collaborer pour gagner des points, utilisés pour avoir des evenements gratuits!
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
