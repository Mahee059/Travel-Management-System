import React from "react";
import type { IPackage } from "../../../interface/tour_package.interface";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import moment from "moment";
import { GoPeople } from "react-icons/go";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Button from "../../common/button";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
interface IProps {
  tour_package: IPackage;
}

const DetailSection: React.FC<IProps> = ({ tour_package }) => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  const onBookClick = () => {
    if (!isLoading && user) {
      navigate(`/book/${tour_package._id}?name=${tour_package.title}`);
    } else {
      toast.error("You need to login to book a package");
    }
  };

  return (
    <div className="w-full tracking-wider flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700 capitalize">
          {tour_package.title}
        </h1>
        <div className="flex items-center gap-1">
          <span className="text-gray-800 font-semibold">4.5</span>
          <MdOutlineStarPurple500 size={24} color={"gold"} />
        </div>
      </div>

      <div className="flex gap-2 items-center ">
        <LuCalendarCheck size={22} className="text-emerald-800 font-bold" />
        <span className="text-[15px] font-bold text-gray-600">
          {moment(tour_package.start_date).format("LL")}-
        </span>
        <span className="text-[15px] font-bold text-gray-600">
          {moment(tour_package.end_date).format("LL")}
        </span>
        <span className="text-[13px] font-bold text-emerald-700 ml-1">
          ({moment(tour_package.end_date).fromNow()})
        </span>
      </div>

      <div className="flex gap-1">
        <GoPeople size={18} className="text-emerald-800 mr-1 " />
        <span className="text-sm font-bold">
          {tour_package.seats_available}/{tour_package.total_seats} Seats
        </span>
        <span className="text-sm text-emerald-700">Available</span>
      </div>

      <div className=" flex items-center">
        <TbCurrencyRupeeNepalese size={18} className="text-emerald-800 mr-2" />

        <p>
          <span className="font-bold text-emerald-700">
            {tour_package.total_charge}
          </span>{" "}
          <span className="capitalize">
            {tour_package.cost_type.split("_").join(" ").toLocaleLowerCase()}
          </span>
        </p>
      </div>

      <p className="text-[15px] text-gray-700">
        Hurry up! Only{" "}
        <span className="texx-sm  italic tracking-wider text-emerald-800">
          {Math.abs(
            moment(new Date(Date.now())).diff(tour_package.start_date, "days")
          )}{" "}
          Days
        </span>{" "}
        left.
      </p>

      <p className="text-[15px] text-gray-700">
        Book your seat now{" "}
        <span className="text-sm text-emerald-800 italic font">
          {tour_package.seats_available} Persons
        </span>{" "}
        can join us.
      </p>

      {/* dexription */}
      <div className="text-gray-500 max-w-[90%] font-light leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A magni
        ducimus quaerat optio cum dolor id, hic vitae iure eligendi delectus,
        corporis itaque labore distinctio natus reprehenderit est placeat
        tempore.
      </div>

      <div className="mt-10 w-full">
        <p className="text-lg italic font-bold text-emerald-900">
          Your Next Adventure Awaits You,
        </p>
      </div>
      <div className="flex gap-4 mt-12 w-full">
        {/* <Link className='w-full' to={link}> */}
        <Button onClick={onBookClick} label="Book Now" />
        {/* </Link> */}
        <button className=" cursor-pointer w-full bg-white rounded-md border border-emerald-500 ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DetailSection;
