import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../../../datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="relative lg:flex items-center h-full z-17  justify-end">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full cursor-pointer"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
