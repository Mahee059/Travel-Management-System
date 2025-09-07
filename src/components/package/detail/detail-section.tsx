import React from "react";
import type { IPackage } from "../../../interface/tour_package.interface";

interface IProps {
  tour_package: IPackage;
}

const DetailSection: React.FC<IProps> = ({ tour_package }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-700 capitalize">
          {tour_package.title}
        </h1>
      </div>
    </div>
  );
};

export default DetailSection;
