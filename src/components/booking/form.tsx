import React from "react";
import Input from "../common/inputs/input";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import type { IPackage } from "../../interface/tour_package.interface";
import { Package_Charge } from "../../interface/enum.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { book } from "../../api/package.api";
import booking_schema from "../../schema/booking.schema";
import useAuth from "../../hooks/useAuth";

interface IProps {
  tour_package: IPackage;
}
const BookingForm: React.FC<IProps> = ({ tour_package }) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      total_person: "",
      phone: "",
    },
    resolver: yupResolver(booking_schema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: book,
    onSuccess: (response) => {
      toast.success(response.message || "Packed Booked");
      reset();
      queryClient.invalidateQueries({
        queryKey: ["get_package_by_id"],
      });
    },
    onError: (error) => {
      toast.error(error.message || "Packed Booked");
    },
  });

  const total_cost = () => {
    let cost = 0;

    if (tour_package.cost_type === Package_Charge.PER_PERSON) {
      cost = parseInt(watch("total_person") || "0") * tour_package.total_charge;
    }

    return cost;
  };

  const handle_submit = (data: { phone: string; total_person: string }) => {
    console.log(data);
    mutate({ ...data, tour_package: tour_package._id });
  };
  return (
    <div className="w-full flex-1 tracking-wider">
      <h1 className="text-2xl font-bold my-3 text-center text-gray-700  ">
        Fill the From to Book you Seat
      </h1>

      <div className="border px-6 py-4 my-6  rounded-md border-dashed border-emerald-400">
        <h3 className="text-emerald-800 text-base font-semibold text-center">
          Your are booking this package as user
        </h3>
        <div>
          <p className="text-center text-gray-600 text-base">
            {user?.email} ({user?.firstName + " " + user?.lastName} )
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(handle_submit)}
        className="flex flex-col gap-4"
      >
        <Input
          label="Total Person"
          id="total_person"
          placeholder={"Number of persons"}
          type="text"
          key={"total_person"}
          required={true}
          name="total_person"
          register={register}
          error={errors.total_person?.message}
        />

        <Input
          label="Phone Number"
          id="phone"
          placeholder={"Phone Number"}
          type="text"
          key={"phone"}
          required={true}
          name="phone"
          register={register}
          error={errors.phone?.message}
        />

        <div className="flex gap-4 mt-12 w-full">
          <Button
            disabled={isPending}
            type="submit"
            label={
              isPending ? "Please wait..." : `Book Now (NRP: ${total_cost()})`
            }
          />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
