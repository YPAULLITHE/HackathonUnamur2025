import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Trophy, Calendar } from "lucide-react";

const events = [
  { id: 1, title: "Tech Conference 2025", date: "March 10, 2025" },
  { id: 2, title: "Startup Pitch Night", date: "March 15, 2025" },
  { id: 3, title: "Volunteering for Charity Run", date: "March 20, 2025" },
];

const leaderboard = [
  { id: 1, name: "Alice Johnson", points: 1500 },
  { id: 2, name: "Bob Smith", points: 1300 },
  { id: 3, name: "Charlie Doe", points: 1100 },
];

export default function EventPlatform() {
  const [userPoints, setUserPoints] = useState(500);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🎉 University of Namur Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Events Section */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><Calendar /> Upcoming Events</h2>
            {events.map(event => (
              <div key={event.id} className="p-2 border-b">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-500">📅 {event.date}</p>
                <Button className="mt-2">Join Event</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leaderboard Section */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><Trophy /> Leaderboard</h2>
            {leaderboard.map(user => (
              <div key={user.id} className="p-2 border-b flex justify-between">
                <p>{user.name}</p>
                <p className="font-bold">🏆 {user.points} pts</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* User Profile Section */}
      <Card className="mt-6">
        <CardContent>
          <h2 className="text-xl font-semibold flex items-center gap-2"><User /> Your Dashboard</h2>
          <p className="mt-2">You have <span className="font-bold">{userPoints} points</span> 🎯</p>
          <Button className="mt-4">See Rewards</Button>
        </CardContent>
      </Card>
    </div>
  );
}
