import React, { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const events = {
  Festivité: [
    { id: 1, title: "Barbecue Arsenal", date: "30 Avril, 2025", img: "https://raw.githubusercontent.com/YPAULLITHE/HackathonUnamur2025/refs/heads/main/docs/437938802_1229657708187908_8654954303240220465_n.jpg" },
    { id: 2, title: "Soirée bière spéciale", date: "20 Mars, 2025", img: "https://github.com/YPAULLITHE/HackathonUnamur2025/blob/main/docs/480699643_1045666430923724_5676376053585366419_n.jpg?raw=true" },
    { id: 3, title: "Bunker zoo", date: "7 Mars, 2025", img: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/480513275_1178003550997476_6568865354911535841_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=pykb7DOZdMgQ7kNvgEFPGP_&_nc_oc=AdhHazlr_ybCkcjUwIBiDbQyCZ7qdMVz7U7uAJl1evXo23cwQsjG9s0NEC6l0R0sBLk&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=Ap9FT2k5pvQm3grtxTqOK3s&oh=00_AYAPtIoYoqLZUC-IGWZop5UsjI62cBTsXSWkd_eY9GVdHg&oe=67CA03B8" },
    { id: 8, title: "Tournoi de kicker", date: "5 Avril, 2025", img: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/480278858_1045660824257618_7714849073882557614_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=rHK60XcRxRoQ7kNvgGFWMFE&_nc_oc=Adh0djzeWrKtW82Gx1jmWITsKUnpe00bdMGd3VyewkPGsadCK2O1df3ITHhZ8Efhfa0&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=A5sD9zfaLalipT6UbA60Fgv&oh=00_AYAGJMQTDpQxUVJy9BJ7p9B6FrrC6EJRwfGTLDfGl-59Dw&oe=67C9E3D2" },
    { id: 9, title: "Aprem crêpes", date: "2 Juin, 2025", img: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/476438733_1045662027590831_6795623185965163209_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=75d36f&_nc_ohc=TAtlXBdgpPQQ7kNvgGr9ymN&_nc_oc=AdhGRQo7nTO6hO4g-9TNs9-j07O_B4R41w2Go-bFQvggaM8LdGLN6KpVDFsY-FHaOjY&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=ANlvSY0ec8KzzzF_ydOm-Gl&oh=00_AYBieqYI00Bm-Rpu0XIKvUZEf_dNcDvBe98clkvIxSWSgA&oe=67CA012B" },
    { id: 10, title: "Boursière info", date: "12 Mars, 2025", img: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/467495809_1102401215224377_3422725987919114639_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=75d36f&_nc_ohc=5WrE7tNJJtkQ7kNvgHrGi-7&_nc_oc=AdgYylH6P-uMI9M89NIElWvJtdwUl9dAjESWMdoCQnYe2tIwJXjI_P6IgmGLThvFvkc&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=Aytowwl6DLOx2oNYbuZqaKS&oh=00_AYCBo6sRI4H2NyJvySUjFUjJ3H7Bc8BN8_g4R17OxxvS5A&oe=67C9E1E7" }
  ],
  Challenge: [
    { id: 4, title: "Hackathon", date: "28 Fevrier, 2025", img: "https://github.com/YPAULLITHE/HackathonUnamur2025/blob/main/docs/469367132_1145684867557710_8947962050855156416_n.jpg?raw=true" },
    { id: 5, title: "Run in the woods", date: "3 Mai, 2025", img: "https://github.com/YPAULLITHE/HackathonUnamur2025/blob/main/docs/475463860_122135677430398677_3422370720271383604_n.jpg?raw=true" }
  ],
  Gala: [
    { id: 6, title: "Projection de film", date: "April 5, 2025", img: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/480335092_1250437063515846_3653262893540269418_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=75d36f&_nc_ohc=oLibXJPbmXoQ7kNvgEGOQwa&_nc_oc=AdhVRPeVOp7_8Q3VfVwUr4-HystLmVEv6XsDFowxbxPHCLufw10bsVNgDm2jjUcPpHg&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=AnIEvayAXprQvk38rNuM4jF&oh=00_AYCgXN6Yk06rJC8N2jQTyqrrUYLvwuClggEzpXTYSKU8FA&oe=67C9E7B7" },
    { id: 7, title: "Gala philo", date: "4 Mars, 2025", img: "https://github.com/YPAULLITHE/HackathonUnamur2025/blob/main/docs/480240133_1141482037762917_8321010484430975463_n.jpg?raw=true" }
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
  {/* Section with Styled Background */}
  <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl p-8 shadow-md">
    <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 leading-relaxed">
      📢 Ici vous pouvez trouver tous les événements de l'université de Namur et autour pour y participer.
      <br />
      🎟️ Il est aussi possible d'y collaborer pour gagner des points, utilisés pour avoir des événements gratuits!
    </h2>
  </div>

  {/* Section Title with Decorative Line */}
  <div className="relative text-center">
    <h1 className="text-4xl font-bold text-gray-800">Evénements à venir</h1>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-2"></div>
  </div>

      {Object.keys(events).map(category => (
        <div key={category} className="relative">
          <h2 className="text-2xl font-semibold mb-4">{category} Evénements</h2>

          {/* Scroll Left Button */}
          <button
            onClick={() => scrollLeft(category)}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline"
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
                    <Link to={`/event/${event.id}`} className="bg-accent text-accent-content btn btn-primary mt-2">Participer/Aider</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollRight(category)}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline"
          >
            ❯
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventCarousel;
