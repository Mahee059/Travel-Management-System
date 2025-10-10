/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { useFieldArray, type Control } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
interface IProps {
  control: Control<any>;
  register: any;
  value: { location: string; time: any }[];
}

const DestinationInput: React.FC<IProps> = ({ control, register }) => {
  // const [disableAdd , setDisableAdd] = useState(false)
  const { append, remove, fields } = useFieldArray({
    name: "destinations",
    control,
  });

  const addNewField = () => {
    append({ location: "", time: new Date(Date.now()).getTime() });
  };

  const removeField = (index: number) => {
    remove(index);
  };

  const checkRemoveDisabled = (): boolean => {
    if (fields.length === 1) {
      return true;
    }

    return false;
  };

  return (
    <div className="w-full">
      <div className="flex">
        <label
          htmlFor={"destinations"}
          className="text-lg font-normal  text-gray-900"
        >
          Destination
        </label>
        <LuAsterisk className="text-red-400" />
      </div>

      {/* input field */}
      <div className="flex flex-col gap-3">
        {fields.map((item, index) => (
          <div key={item?.id} className="flex items-center gap-6">
            <input
              {...register(`destinations[${index}].location`)}
              className=" p-2 min-w-[250px] border border-emerald-300 rounded-md  focus:outline-emerald-500"
              placeholder="location "
            />
            <input
              {...register(`destinations[${index}].time`)}
              className="border border-emerald-300 rounded-md  focus:outline-emerald-500 p-2"
              type="datetime-local"
            />
            <div className="flex gap-3">
              <button
                onClick={addNewField}
                className="disabled:cursor-not-allowed disabled:text-emerald-300 text-emerald-600 border border-gray-200 p-2 px-2 rounded-md cursor-pointer"
              >
                <FaCheck size={18} className="" />
              </button>
              <button
                disabled={checkRemoveDisabled()}
                onClick={() => {
                  removeField(index);
                }}
                className="disabled:cursor-not-allowed disabled:text-red-300  text-red-500  border border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <IoClose size={20} className="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationInput;
