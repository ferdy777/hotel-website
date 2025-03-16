import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../Datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="relative lg:flex items-center h-full z-15 justify-end">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full cursor-pointer"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
