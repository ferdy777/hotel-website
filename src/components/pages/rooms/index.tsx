import { roomData } from "../../../data/data";
import RoomList from "../home/roomList";
import Rooms from "../../../images/room.jpg";

const RoomsPage = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(${Rooms})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mt-28 mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-8 text-black drop-shadow-lg tracking-wide ">
          Available Rooms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 w-full">
          {roomData.map((room) => (
            <RoomList key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsPage;
