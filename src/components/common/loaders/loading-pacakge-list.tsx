import PackageCardShimmer from "../../package/loding.card";
const LoadingPackageList = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="mt-10 grid grid-cols-5 gap-5">
      {arr.map((v) => (
        <PackageCardShimmer key={v} />
      ))}
    </div>
  );
};

export default LoadingPackageList;
