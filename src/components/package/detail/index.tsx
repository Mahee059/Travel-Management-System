import React from "react";
import ImageCarousel from "./image-carousel";
import type { IPackage } from "../../../interface/tour_package.interface";
import DetailSection from "./detail-section";


interface IProps {
  tour_package: IPackage;
}

const PackageDetail: React.FC<IProps> = ({ tour_package }) => {
  return (
    <div className="flex gap-6">
      {/* image section */}
      <div className="w-1/2"  >
      <ImageCarousel images={tour_package?.images ?? []} />
      </div>

      {/* detail section */}
      <DetailSection tour_package={tour_package} />
    </div>
  );
};

export default PackageDetail;
