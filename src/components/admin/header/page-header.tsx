import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

interface IProps {
  title: string;
  link?: string;
  button_text?: string;
}

const PageHeader: React.FC<IProps> = ({ title, button_text, link = "#" }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
      </div>
      {button_text && (
        <Link to={link}>
          <button className="cursor-pointer flex items-center justify-between text-gray-700 gap-2 border border-gray-400 py-2.5 px-3 rounded-md bg-gray-50">
            <MdAdd size={26} />
            <span className="font-semibold text-lg ">{button_text}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
