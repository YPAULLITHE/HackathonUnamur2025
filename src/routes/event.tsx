import React from 'react';

const Event = () => {
  return (
    <div className="h-full p-4">
    <div className="event-detail-container">
      {/* Image de l'événement */}
      <div className="event-image">
        <img src="https://via.placeholder.com/600x300" alt="Event" />
      </div>

      {/* Description de l'événement */}
      <div className="event-description">
        <h1>Nom de l'événement</h1>
        <p>
          Description de l'événement. Cet événement est organisé pour ... 
          (Ajoute ici plus de détails comme la date, l'heure, le lieu, etc.)
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
    </div>
  );
};

export default Event;