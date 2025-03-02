import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import events from "../components/EventCarroussel"
import axios from "axios"
import get_events from "../backend/routes.py"

const Event = () => {
  const { id } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState([]); // Store a single event

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]); // Runs effect when `id` changes

  if (!event) {
    return <p>No events found...</p>;
  }
  return (
    <div className="text-center">
      {/* Image de l'événement */}
      <div className="event-image">
        <img src="{event.img}" />
      </div>

      {/* Description de l'événement */}
      <div className="event-description">
        <h1 className="text-3xl font-bold text-center mb-6">{event.name}</h1>
        <p>
          {event.description}
        </p>
      </div>

      {/* Choix pour les collaborateur et participant */}
      <div className="event-options">
        <div className="option">
          <h3 className="text-2xl font-semibold mb-4">Collaborateurs</h3>
          <p className="text-xl font-semibold mb-4">Gagnez des pièces virtuelles pour votre participation !</p>
          <button className="bg-accent text-accent-content btn btn-primary mt-2">Collaborer</button>
        </div>
        <br></br>
        <div className="option">
          <h3 className="text-2xl font-semibold mb-4">Participants</h3>
          <p className="text-xl font-semibold mb-4">Participez et dépensez de l'argent ou des pièces virtuelles !</p>
          <button className="bg-accent text-accent-content btn btn-primary mt-2">Participer €</button>&nbsp;&nbsp;
          <button className="bg-accent text-accent-content btn btn-primary mt-2">Participer 🏆</button>
        </div>
      </div>
    </div>
  );
};

export default Event;