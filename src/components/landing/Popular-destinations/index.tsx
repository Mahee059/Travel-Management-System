
import PackageCard from "../../package/card";
import ComponentTitle from "../../common/component-title";
import { get_popular } from "../../../api/package.api";
import { useQuery } from "@tanstack/react-query";
import LoadingPackageList from "../../common/loaders/loading-pacakge-list";

const PopilarDestinations = () => {
  //* get all destination
  const { data, isLoading } = useQuery({
    queryFn: get_popular,
    queryKey: ["get_popuar_destinations"],
  });

  console.log(data, isLoading);
  return (
    <div className="px-32 tracking-wider my-10">
      {/* title-section */}
      <ComponentTitle
        title="Popular Destinations"
        sub_title="Our most popular destinations perfect for your next adventure"
        link={"#"}
      />

      {isLoading && <LoadingPackageList />}

      {/* card section */}
      <div className="mt-10 grid grid-cols-5 gap-5">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
};

export default PopilarDestinations;
