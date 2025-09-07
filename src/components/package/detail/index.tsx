import React from "react";
import ImageCarousel from "./image-carousel";
import type { IPackage } from "../../../interface/tour_package.interface";
import DetailSection from "./detail-section";

const images = [
  {
    path: "https://www.himalayanascent.com/wp-content/uploads/2019/02/untitled-40.jpg",
    public_id: "11",
  },
  {
    path: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/88/53/b3/caption.jpg?w=500&h=400&s=1",
    public_id: "11",
  },
  {
    path: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/0a99949f58bc92145369e8363c64c33bfd85f819/big-68acc559aad8def0f326f4d62e8faf78.jpg",
    public_id: "11",
  },
];

interface IProps {
  tour_package: IPackage;
}

const PackageDetail: React.FC<IProps> = ({ tour_package }) => {
  return (
    <div className="flex gap-6">
      {/* image section */}
      <ImageCarousel images={tour_package?.images ?? []} />

      {/* detail section */}
      <DetailSection tour_package={tour_package} />
    </div>
  );
};

export default PackageDetail;
