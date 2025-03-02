import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]);

  //if (!event) {
  //  return <p>No events found...</p>;
  //}

  return (
    <div className="text-center p-10">
      {/* Event Image & Description Container */}
      <div className="flex items-center justify-start gap-20 pl-20">
        {/* Event Image */}
        <img
          src="https://raw.githubusercontent.com/YPAULLITHE/HackathonUnamur2025/refs/heads/main/docs/437938802_1229657708187908_8654954303240220465_n.jpg"
          className="max-w-[800px] w-full border-4 border-gray-500 rounded-lg shadow-lg"
        />

        {/* Event Description with White Background */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg ml-12">
          <h1 className="text-3xl font-bold">Barbecue fin d'année</h1>
          <p className="mt-4 text-lg text-gray-700">
            Nous vous invitons tous pour boire et fêter autour du feu de joie!<br />
            Venez nombreux et venez joyeux!<br />
          </p>
        </div>
      </div>

      {/* Collaborateurs & Participants Section */}
      <div className="flex justify-center items-start mt-20 gap-64">
        {/* Collaborateurs */}
        <div className="bg-white p-6 rounded-xl shadow-md flex-1 max-w-md">
          <h3 className="text-2xl font-semibold mb-2">Collaborateurs</h3>
          <p className="text-lg text-gray-700 mb-4">
            Gagnez des pièces virtuelles pour votre participation !
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
            Collaborer +5🏆
          </button>
        </div>

        {/* Participants */}
        <div className="bg-white p-6 rounded-xl shadow-md flex-1 max-w-md">
          <h3 className="text-2xl font-semibold mb-2">Participants</h3>
          <p className="text-lg text-gray-700 mb-4">
            Participez et dépensez de l'argent ou des pièces virtuelles !
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
            Participer 10€
          </button>
          &nbsp;&nbsp;
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600">
            Participer -10🏆
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
