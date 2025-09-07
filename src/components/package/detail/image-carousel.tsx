import React from "react";
import type { IImage } from "../../../interface/global.types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IProps {
  images: IImage[];
}

const ImageCarousel: React.FC<IProps> = ({ images }) => {
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
    <div className="max-w-200">
      <Slider {...settings}>
        {images?.map((image) => (
          <div key={image.public_id} className="h-150  w-200 rounded-md shadow">
            <img
              src={image.path}
              className="h-full w-full object-fill rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
