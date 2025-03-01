import React, { useState } from "react";
import styles from "./EventPlatform.css";

const events = [
  { id: 1, title: "Tech Conference 2025", date: "March 10, 2025" },
  { id: 2, title: "Startup Pitch Night", date: "March 15, 2025" },
  { id: 3, title: "Volunteering for Charity Run", date: "March 20, 2025" },
];

export default function EventPlatform() {
  const [userPoints, setUserPoints] = useState(500);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎉 University of Namur Events</h1>
      
      {events.map((event) => (
        <div key={event.id} className={styles.eventCard}>
          <p><strong>{event.title}</strong></p>
          <p>📅 {event.date}</p>
          <button className={styles.button}>Join Event</button>
        </div>
      ))}

      <h2>Your Points: {userPoints} 🎯</h2>
    </div>
  );
}
