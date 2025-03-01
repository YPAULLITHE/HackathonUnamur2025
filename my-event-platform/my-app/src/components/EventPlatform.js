import React, { useState } from "react";
import { User, Trophy, Calendar, Moon, Sun } from "lucide-react";

const events = [
  { id: 1, title: "Tech Conference 2025", date: "March 10, 2025", type: "tech" },
  { id: 2, title: "Startup Pitch Night", date: "March 15, 2025", type: "business" },
  { id: 3, title: "Volunteering for Charity Run", date: "March 20, 2025", type: "volunteer" },
];

const leaderboard = [
  { id: 1, name: "Alice Johnson", points: 1500 },
  { id: 2, name: "Bob Smith", points: 1300 },
  { id: 3, name: "Charlie Doe", points: 1100 },
];

export default function EventPlatform() {
  const [userPoints, setUserPoints] = useState(500);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen p-6 max-w-4xl mx-auto transition-all`}>
      
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full">
        {darkMode ? <Sun /> : <Moon />}
      </button>

      <h1 className="text-3xl font-bold mb-4 text-center">🎉 University of Namur Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Events Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all">
          <h2 className="text-xl font-semibold flex items-center gap-2"><Calendar /> Upcoming Events</h2>
          {events.map(event => (
            <div key={event.id} className={`p-2 border-b hover:scale-105 transition-transform ${event.type === "tech" ? "bg-blue-100" : event.type === "business" ? "bg-green-100" : "bg-yellow-100"} rounded-md mt-2`}>
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">📅 {event.date}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Join Event</button>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all">
          <h2 className="text-xl font-semibold flex items-center gap-2"><Trophy /> Leaderboard</h2>
          {leaderboard.map(user => (
            <div key={user.id} className="p-2 border-b flex justify-between">
              <p>{user.name}</p>
              <p className="font-bold">🏆 {user.points} pts</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile Section */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mt-6 transition-all">
        <h2 className="text-xl font-semibold flex items-center gap-2"><User /> Your Dashboard</h2>
        <p className="mt-2">You have <span className="font-bold">{userPoints} points</span> 🎯</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-2">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(userPoints / 2000) * 100}%` }}></div>
        </div>
        
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">See Rewards</button>
      </div>
    </div>
  );
}
