import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import events from "../components/EventCarroussel"
import axios from "axios"

const Event = () => {
  const { id } = useParams(); // Get event ID from URL
  const [events, setEvent] = useState(null); // Store a single event

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]); // Runs effect when `id` changes

  if (!events) {
    return <p>No events found...</p>;
  }
  return (
    <div className="event-detail-container">
      {/* Image de l'événement */}
      <div className="event-image">
        <img src="${events.img}" alt="Event" />
      </div>

      {/* Description de l'événement */}
      <div className="event-description">
        <h1>{events.name}</h1>
        <p>
          {events.description}
        </p>
      </div>

      {/* Choix pour les collaborateur et participant */}
      <div className="event-options">
        <div className="option">
          <h3>Collaborateurs</h3>
          <p>Gagnez des pièces virtuelles pour votre participation !</p>
          <button className="option-btn">Devenir Collaborateur</button>
        </div>
        <div className="option">
          <h3>Participants</h3>
          <p>Participez et dépensez de l'argent ou des pièces virtuelles !</p>
          <button className="option-btn">Participer</button>
        </div>
      </div>
    </div>
  );
};

export default Event;