import { ReservationData } from "../type/reservationTypes";

export const defaultReservation: ReservationData = {
  name: "",
  email: "",
  phone: "",
  checkIn: null,
  checkOut: null,
  adults: 1,
  kids: 0,
  roomType: "Standard",
  requests: "",
};
