import { useQuery } from "@tanstack/react-query";
import { get_by_id } from "../../../api/package.api";
import type React from "react";
import CreatePackageform from "./form";


interface IProps {
  id: string;
}

const UpdatePackage: React.FC<IProps> = ({ id }) => {
  const { isLoading, data } = useQuery({
    queryFn: () => {
      return get_by_id(id ?? "");
    },
    queryKey: ["get_packae_by_id", id],
  });

  if (isLoading) {
    return <div> Loading </div>;
  }
  return (
    <div className="w-full h-full">
      <CreatePackageform data={data?.data} />
    </div>
  );
};

export default UpdatePackage;
