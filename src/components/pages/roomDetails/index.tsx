import { useRoomContext } from "../../../context/roomContext";
import { Room } from "../../../type/roomTypes";

import { useParams } from "react-router-dom";

import ReservationForm from "../roomDetails/reservationForm/index";

const RoomDetailsScreen = () => {
  const { id } = useParams();
  const { rooms } = useRoomContext();

  // Ensure room is correctly typed
  const room: Room | undefined = rooms.find(
    (room: Room) => room.id === Number(id)
  );

  // Prevent error if room is not found
  if (!room) {
    return (
      <p className="text-center text-red-500 text-lg font-semibold">
        Room not found
      </p>
    );
  }

  // Destructure after confirming room exists
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section className="">
      <div className="bg-[url('./images/room.jpg')] bg-cover bg-center relative flex justify-center items-center h-[320px] md:h-[420px] lg:h-[560px] px-4 text-center">
        <div className="w-full h-full absolute bg-black/70"></div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white z-20 font-sans">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Section - Room Info */}
          <div className="space-y-6 h-full flex flex-col">
            <h2 className="text-4xl font-bold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <img
              className="w-full rounded-lg flex-grow"
              src={imageLg}
              alt={name}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-3">Room Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {facilities.map((item, index) => (
                  <div className="flex items-center gap-x-3" key={index}>
                    <div className="text-3xl text-gray-700">{item.icon}</div>
                    <div className="text-lg font-medium">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Reservation Form */}
          <div className="p-6 h-full flex flex-col">
            <div className="flex-grow">
              <ReservationForm price={price} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsScreen;
