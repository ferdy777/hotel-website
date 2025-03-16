export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  kids: number;
  roomType: string;
  requests?: string;
}

export interface ReservationFormProps {
  price: number;
}
