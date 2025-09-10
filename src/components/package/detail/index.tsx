import React from "react";
import ImageCarousel from "./image-carousel";
import type { IPackage } from "../../../interface/tour_package.interface";
import DetailSection from "./detail-section";

interface IProps {
  tour_package: IPackage;
}

const PackageDetail: React.FC<IProps> = ({ tour_package }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-10 mt-10 ">
      {/* image section */}
      <ImageCarousel
        images={
          tour_package?.images?.length > 0
            ? [...tour_package.images, tour_package.cover_image]
            : Array.from({ length: 3 }, () => tour_package.cover_image)
        }
      />

      {/* detail section */}
      <DetailSection tour_package={tour_package} />
    </div>
  );
};

export default PackageDetail;
