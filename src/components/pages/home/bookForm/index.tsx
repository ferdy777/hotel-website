import CheckIn from "../checkIn";
import AdultDropDown from "../adultDropDown";
import KidsDropDown from "../kidsDropDown/Index";
import CheckOut from "../checkOut";
import { useRoomContext } from "../../../../context/roomContext";

const BookForm = () => {
  const { handleClick } = useRoomContext();
  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultDropDown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropDown />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Check Now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
