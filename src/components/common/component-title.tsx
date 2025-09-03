import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router";

interface IProps {
  title: string;
  sub_title: string;
  link?: string;
}

const ComponentTitle: React.FC<IProps> = ({ title, sub_title, link }) => {
  return (
    <div className="flex justify-between items-center">
      {/* heading */}
      <div className="w-[280px] md:w-fit">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-700 ">
          {title}
        </h1>
        <p className="mt-1 md:mt-2 text-xs line-clamp-1 md:line-clamp-2 lg:text-md text-gray-600">
          {sub_title}
        </p>
      </div>

      {/* explore all */}
      {link && (
        <Link
          to={link}
          className="flex gap-1 items-center text-gray-600 w-[90px]"
        >
          <p className="text-xs md:text-sm">Explore all</p>
          <IoChevronDown size={19} />
        </Link>
      )}
    </div>
  );
};

export default ComponentTitle;
