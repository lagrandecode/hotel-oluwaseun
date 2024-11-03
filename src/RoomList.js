import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  return (
    <div>
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
