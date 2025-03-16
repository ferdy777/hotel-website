import { useRoomContext } from "../../../context/roomContext";
import { Room } from "../../../type/roomTypes";

import { useParams } from "react-router-dom";

import ReservationForm from "../roomDetails/reservationForm/index";

const RoomDetailsScreen = () => {
  const { id } = useParams();
  console.log(id);
  const { rooms } = useRoomContext();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  console.log(room);

  const { name, description, facilities, imageLg, price } = room as Room;

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
          <div className="space-y-6 h-full flex flex-col">
            <h2 className="text-4xl font-bold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <img
              className="w-full rounded-lg flex-grow"
              src={imageLg}
              alt="Room"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-3">Rooms Facilities</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                quibusdam illo fugiat mollitia...
              </p>
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
