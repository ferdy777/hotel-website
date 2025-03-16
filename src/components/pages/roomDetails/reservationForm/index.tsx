import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog } from "@headlessui/react";
import {
  ReservationData,
  ReservationFormProps,
} from "../../../../type/reservationTypes";
import { defaultReservation } from "../../../../data/defaultReservation";

const ReservationForm = ({ price }: ReservationFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<ReservationData>({ defaultValues: defaultReservation });

  const [isSuccess, setIsSuccess] = useState(false);

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 1);
    }
    return 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * price;

  const onSubmit = (data: ReservationData) => {
    console.log("Reservation Data:", { ...data, totalPrice });
    setIsSuccess(true);
    reset(); // Clears the form after submission
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Hotel Reservation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Check-in & Check-out Dates */}
        <div>
          <label className="block font-medium">Check-in Date</label>
          <Controller
            control={control}
            name="checkIn"
            rules={{ required: "Check-in date is required" }}
            render={({ field }) => (
              <DatePicker
                className="w-full p-2 border rounded-md cursor-pointer"
                placeholderText="Select Date"
                selected={field.value}
                onChange={field.onChange}
                minDate={new Date()}
              />
            )}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-sm">{errors.checkIn.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Check-out Date</label>
          <Controller
            control={control}
            name="checkOut"
            rules={{
              required: "Check-out date is required",
              validate: (value) =>
                value && checkIn && value > checkIn
                  ? true
                  : "Check-out must be after check-in",
            }}
            render={({ field }) => (
              <DatePicker
                className="w-full p-2 border rounded-md cursor-pointer"
                placeholderText="Select Date"
                selected={field.value}
                onChange={field.onChange}
                minDate={checkIn || new Date()}
              />
            )}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-sm">{errors.checkOut.message}</p>
          )}
        </div>

        {/* Total Price */}
        <div className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-red-500">
            {totalPrice ? `$${totalPrice}` : "$0"}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          Submit Reservation
        </button>
      </form>

      {/* Success Modal with Overlay */}
      {isSuccess && (
        <div className="fixed bg-black flex items-center justify-center bg-opacity-50 z-50">
          <Dialog
            open={isSuccess}
            onClose={() => setIsSuccess(false)}
            className="relative z-50"
          >
            {/* Overlay with lighter opacity */}
            <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-50 backdrop-blur-sm" />

            {/* Modal Content */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center relative">
                <h3 className="text-xl font-semibold mt-4">
                  Reservation Successful!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your booking has been confirmed.
                </p>
                <p className="text-lg font-bold text-green-600">
                  Total: ${totalPrice}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
