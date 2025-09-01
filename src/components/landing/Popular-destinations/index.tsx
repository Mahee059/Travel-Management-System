
import PackageCard from "../../package/card";
import ComponentTitle from "../../common/component-title";
import { useQuery } from "@tanstack/react-query";
import { get_popular } from "../../../api/package.api";

const PopilarDestinations = () => { 
  // get all destinations 
  const { data, isLoading } = useQuery({  
    queryFn: get_popular,
    queryKey: ['get_popular_dsetinations']
    
  }) 

  console.log(data,isLoading)
  return (
    <div className="px-32 tracking-wider my-10">
      
      <ComponentTitle
        title='Popular Destinations' 
        sub_title="Our most popular destinations perfect for your next adveture" 
        link={'#'}
        
      />
      {/* card section */}
      <div className="mt-10 grid grid-cols-3 gap-5">
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
