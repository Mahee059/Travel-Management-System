
import { Package_Charge } from "../../interface/enum.types";
import { CiCalendarDate } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
const tour_package = {
  title: "Kathmandu-Mustang",
  cover_image: {
    path: "https://www.himalayanascent.com/wp-content/uploads/2019/02/untitled-40.jpg",
  },
  start_date: "16 Sept 2025",
  end_date: "20 Sept 2025",
  seats_available: 10,
  total_seats: 20,
  total_charge: 3000,
  cost_type: Package_Charge.PER_PERSON,
};

const PackageCard = () => {
  return (
    <div className="max-w-[300px] flex flex-col gap-1 cursor-pointer shadow transition-all duration-400 hover:shadow-xl hover:translate-y-1 hover:scale-[1.04]">
      {/* image section */}
      <div className="w-full h-[200px] rounded ">
        <img
          className="rounded h-full -wull object-fill"
          src={tour_package.cover_image.path}
          alt={tour_package.title}
        />
      </div>

      {/* title */}
      <div className="p-2 flex flex-col  gap-1 ">
        <h1 className="text-xl font-bold text-emerald-700 mt-3">
          {tour_package.title}
        </h1>

        <div className="flex items-center">
          <CiCalendarDate size={22} className="text-emerald-700 mr-1" />
          <span className="text-[13px] font-bold text-gray-800">
            {tour_package.start_date}-
          </span>
          <span className="text-[13px] font-bold text-gray-800">
            {tour_package.end_date}
          </span>
        </div>

        <div className="flex gap-1">
          <GoPeople size={18} className="text-emerald-800 mr-1" />
          <span className="text-sm font-bold">
            {tour_package.seats_available}/{tour_package.total_seats} Seats
          </span>
          <span className="text-sm text-emerald-700">Available</span>
        </div>

        <div className=" flex items-center">
          <TbCurrencyRupeeNepalese
            size={18}
            className="text-emerald-800 mr-2"
          />

          <p>
            <span className="font-bold text-emerald-700">
              {tour_package.total_charge}
            </span>{" "}
            <span className="capitalize">
              {tour_package.cost_type.split("_").join(" ").toLocaleLowerCase()}
            </span>
          </p>
        </div>

        {/* book now */}
        <div className="w-full mt-3">
          <button className="cursor-pointer bg-emerald-700 w-full p-3 rounded-md text-white font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
