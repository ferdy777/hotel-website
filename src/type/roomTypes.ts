import { ReactNode } from "react";

export interface Facility {
  name: string;
  icon: ReactNode;
}

export interface Room {
  id: number;
  name: string;
  description: string;
  facilities: Facility[];
  size: number;
  maxPerson: number;
  price: number;
  image: string;
  imageLg: string;
}

export interface RoomContextType {
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  adults: string;
  setAdults: React.Dispatch<React.SetStateAction<string>>;
  kids: string;
  setKids: React.Dispatch<React.SetStateAction<string>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
