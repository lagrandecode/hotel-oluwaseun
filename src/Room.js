import React from "react";

const Room = ({ room }) => {
  return (
    <div className="room-card">
      <img src={require(`./images/${room.image}`)} alt={room.name} className="room-image" />
      <h2>{room.name}</h2>
      <p>Price: {room.price}</p>
      <p>Services: {room.services}</p>
    </div>
  );
};

export default Room;
