import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Room } from "../../../../type/roomTypes";

type RoomListProps = {
  room: Room;
};

const RoomList: React.FC<RoomListProps> = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="bg-white shadow-2xl h-full group">
      <div className=" overflow-hidden">
        <img
          className=" group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt=""
        />
      </div>
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase tracking-[1px] font-semibold text-base">
        <div className="flex justify-between  w-[90%]">
          <div className="flex items-center gap-x-2">
            <div className=" text-amber-400">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>size</div>
              <div>{size}m2</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className=" text-amber-400">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max people</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className=" font-medium text-2xl">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      <Link
        to={`/room/${id}`}
        className="btn btn-sec btn-sm max-w-[240px] mx-auto"
      >
        Book now from ${price}
      </Link>
    </div>
  );
};

export default RoomList;
