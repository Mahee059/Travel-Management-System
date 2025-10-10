/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface IProps {
  count: number;
  label: string;
  icon: React.ReactNode;
}
const CountCard: React.FC<IProps> = ({ icon, count, label }) => {
  return (
    <div className="p-5 relative max-w-[300px] h-[120px] border border-gray-400 rounded-md overflow-clip shadow cursor-pointer">
      <div className="absolute -left-[1px] top-0 bottom-0 w-[5px] h-full bg-amber-500"></div>
      <div className="h-full flex flex-col justify-between ">
        <div className="flex items-center gap-5">
          {icon}
          <h2 className="text-xl font-bold text-gray-700">{label}</h2>
        </div>
        <div className="flex justify-end">
          <span className="text-lg font-semibold text-orange-600">
            {count.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
