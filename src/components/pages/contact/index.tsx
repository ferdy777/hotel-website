import { MdEmail, MdPhone } from "react-icons/md";
import Rooms from "../../../images/room.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ backgroundImage: `url(${Rooms})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative bg-white bg-opacity-90 shadow-xl rounded-lg p-6 md:p-12 max-w-3xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
          Contact Adina Hotel & Spa
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
          We’d love to hear from you! Reach out to us with any questions,
          bookings, or special requests.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3 text-gray-700">
            <MdPhone className="text-3xl text-blue-500" />
            <span className="text-lg md:text-xl font-medium">
              +123 456 7890
            </span>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <MdEmail className="text-3xl text-red-500" />
            <span className="text-lg md:text-xl font-medium">
              contact@adina-hotel.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
