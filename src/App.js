import React, { useState } from "react";
import RoomList from "./RoomList";
import "./App.css";

const App = () => {
  // State to hold room data with image paths
  const [rooms] = useState([
    { id: 1, name: "Deluxe Room", price: "$120", services: "WiFi, TV, Breakfast", image: "room-1.jpeg" },
    { id: 2, name: "Suite", price: "$200", services: "WiFi, TV, Breakfast, Pool", image: "room-2.jpeg" },
    { id: 3, name: "Single Room", price: "$80", services: "WiFi, TV", image: "room-3.jpeg" },
    { id: 4, name: "Double Room", price: "$150", services: "WiFi, TV, Breakfast, Gym", image: "room-4.jpeg" },
    { id: 5, name: "Penthouse", price: "$300", services: "WiFi, TV, Breakfast, Private Pool", image: "room-5.jpeg" }
  ]);

  return (
    <div className="app">
      <h1 className="header">Hotel Room Booking</h1>
      <RoomList rooms={rooms} />
      {/* Footer with assignment details */}
      <footer className="footer">
        <p>Oluwaseun Ogunmolu - N01677961</p>
        <p>Frontend Assignment</p>
      </footer>
    </div>
  );
};

export default App;
