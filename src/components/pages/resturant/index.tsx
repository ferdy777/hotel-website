import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Rooms from "../../../images/room.jpg";

const Restaurant = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ backgroundImage: `url(${Rooms})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative bg-white bg-opacity-90 shadow-xl rounded-lg p-6 md:p-12 max-w-3xl text-center">
        <MdRestaurantMenu className="text-5xl md:text-6xl text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
          Fine Dining Experience
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          Indulge in a culinary journey where world-class chefs craft exquisite
          dishes using only the freshest ingredients. Enjoy a luxurious
          ambiance, signature dishes, and premium wines.
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          From gourmet cuisine to handcrafted desserts, every bite is a
          masterpiece.
        </p>
        <Link
          to="/rooms"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold text-sm md:text-base"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
