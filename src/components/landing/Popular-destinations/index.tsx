
import PackageCard from "../../package/card";
import ComponentTitle from "../../common/component-title";
import { get_popular } from "../../../api/package.api";
import { useQuery } from "@tanstack/react-query";
import LoadingPackageList from "../../common/loaders/loading-pacakge-list";
import type { IPackage } from "../../package/tour package.interface";

const PopularDestinations = () => {
  //* get all destination
  const { data, isLoading } = useQuery({
    queryFn: get_popular,
    queryKey: ["get_popuar_destinations"],
  });

  console.log(data, isLoading);
  return (
    <div className="px-2 2xl:px-32 tracking-wider my-10">
      {/* title-section */}
      <ComponentTitle
        title="Popular Destinations"
        sub_title="Our most popular destinations perfect for your next adventure"
        link={"#"}
      />

      {isLoading && <LoadingPackageList />}

      {/* card section */}
      {!isLoading && data?.data?.data.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cold-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
          {data?.data?.data?.map((tour_package: IPackage) => (
            <PackageCard tour_package={tour_package} key={tour_package._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularDestinations;
