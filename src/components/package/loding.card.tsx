const PackageCardShimmer = () => {
  return (
    <div className="max-w-[300px] flex flex-col gap-1 cursor-pointer shadow animate-pulse">
      {/* image skeleton */}
      <div className="w-full h-[200px] bg-gray-300 rounded" />

      <div className="p-2 flex flex-col gap-3">
        {/* title skeleton */}
        <div className="h-5 bg-gray-300 rounded w-3/4" />
         
        {/* date skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>

        {/* seat info skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />
        </div>

        {/* charge skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>

        {/* button skeleton */}
        <div className="w-full h-10 bg-gray-300 rounded mt-2" />
      </div>
    </div>
  );
};

export default PackageCardShimmer;
