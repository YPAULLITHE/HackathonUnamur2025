import React, { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const events = {
  Tech: [
    { id: 1, title: "AI & ML Conference", date: "March 15, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 2, title: "Cybersecurity Workshop", date: "March 20, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 3, title: "Cloud Computing Expo", date: "March 22, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 8, title: "AI & ML Conference", date: "March 15, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 9, title: "Cybersecurity Workshop", date: "March 20, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 10, title: "Cloud Computing Expo", date: "March 22, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" }
  ],
  Business: [
    { id: 4, title: "Startup Pitch Night", date: "March 25, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 5, title: "Investment Strategies", date: "March 28, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" }
  ],
  Community: [
    { id: 6, title: "Charity Run", date: "April 5, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
    { id: 7, title: "Environmental Cleanup", date: "April 10, 2025", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" }
  ]
};

const EventCarousel = () => {
  //const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events").then((response) => {
      //setEvents(response.data);
    });
  }, []);
  const scrollRefs = {}; // Store refs dynamically for each category

  Object.keys(events).forEach(category => {
    scrollRefs[category] = useRef<HTMLDivElement>(null);
  });

  const scrollLeft = (category: string) => {
    if (scrollRefs[category].current) {
      scrollRefs[category].current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (category: string) => {
    if (scrollRefs[category].current) {
      scrollRefs[category].current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>

      {Object.keys(events).map(category => (
        <div key={category} className="relative">
          <h2 className="text-2xl font-semibold mb-4">{category} Events</h2>

          {/* Scroll Left Button */}
          <button
            onClick={() => scrollLeft(category)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline"
          >
            ❮
          </button>

          <div className="overflow-hidden relative">
            <div
              ref={scrollRefs[category]}
              className="flex space-x-4 overflow-x-auto scroll-smooth p-4 hide-scrollbar max-w-full"
              style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
            >
              {events[category].map(event => (
                <div key={event.id} className="flex-none w-80 bg-white shadow-lg rounded-lg scroll-snap-align">
                  <img src={event.img} alt={event.title} className="h-40 w-full object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{event.title}</h2>
                    <p className="text-gray-500">📅 {event.date}</p>
                    <Link to={`/event/${event.id}`} className="bg-accent text-accent-content btn btn-primary mt-2">Participate/Help</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollRight(category)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline"
          >
            ❯
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventCarousel;
