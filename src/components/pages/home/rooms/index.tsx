import { useRoomContext } from "../../../../context/roomContext";
import RoomList from "../roomList";

const Rooms = () => {
  const { rooms } = useRoomContext();
  //   console.log(rooms);

  return (
    <section className="py-24">
      <div className="container px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => (
            <RoomList key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
