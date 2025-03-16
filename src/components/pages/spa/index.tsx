import { FaSpa } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rooms from "../../../images/room.jpg";

const Spa = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ backgroundImage: `url(${Rooms})` }}
    >
      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className="relative bg-white bg-opacity-90 shadow-xl rounded-lg p-6 md:p-12 max-w-3xl text-center">
        {/* Icon */}
        <FaSpa className="text-5xl md:text-6xl text-blue-500 mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
          Luxury Spa Experience
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          Relax, refresh, and rejuvenate with our premium spa services.
          Experience the ultimate self-care with soothing massages, facials, and
          therapeutic treatments designed to relieve stress and enhance
          well-being.
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Let our skilled professionals provide a tailored wellness experience
          for you.
        </p>

        {/* Call-to-Action Button */}
        <Link
          to="/rooms"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm md:text-base"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Spa;
