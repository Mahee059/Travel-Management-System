import React from "react";
import type { IImage } from "../../../interface/global.types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IProps {
  images: IImage[];
}

const ImageCarousel: React.FC<IProps> = ({ images }) => {
  console.log(images);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {images?.map((image) => (
          <div key={image.public_id} className="h-140  w-[200px] rounded-md shadow">
            <img
              src={image.path}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
