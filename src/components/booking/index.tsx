import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { get_by_id } from "../../api/package.api";
import DetailSection from "./detail";
import BookingForm from "./form";

const BookingSection = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return get_by_id(id ?? "");
    },
    queryKey: ["get_package_by_id"],
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p className="text-xl text-emerald-700 tracking-widest ">Loading....</p>
      </div>
    );
  }
  return (
    <div className="  flex flex-col md:flex-row  gap-20 my-8 px-3   ">
      {/* Detail section */}
      <div className="flex pt-4 ">
        <DetailSection tour_package={data?.data} />
      </div>

      {/* form section */}

      <div className="w-full">
        <BookingForm tour_package={data?.data} />
      </div>
    </div>
  );
};

export default BookingSection;
