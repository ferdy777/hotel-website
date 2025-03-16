import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { roomData } from "../data/data";
import {
  Room,
  RoomContextType,
} from "../../../../personal/hotel-website/src/types/roomTypes";
// eslint-disable-next-line react-refresh/only-export-components
export const RoomContext = createContext<RoomContextType | null>(null);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [rooms, setRooms] = useState<Room[]>(roomData);
  const [adults, setAdults] = useState<string>("1 Adult");
  const [kids, setKids] = useState<string>("0 kids");
  const [total, setTotal] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newRooms = roomData.filter((room) => {
      return total >= room.maxPerson;
    });
    setRooms(newRooms);
  };

  console.log(rooms);
  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        adults,
        setAdults,
        kids,
        setKids,
        total,
        setTotal,
        handleClick,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRoomContext = (): RoomContextType => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoomContext must be used within a RoomProvider");
  }
  return context;
};
