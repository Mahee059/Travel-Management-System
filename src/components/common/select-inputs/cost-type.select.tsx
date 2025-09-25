/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { Package_Charge } from "../../../interface/enum.types";
import SelectInput from "../inputs/select.input";
import { Controller, type Control } from "react-hook-form";

interface IProps {
  control: Control<any>;
}

const PackageCostType: React.FC<IProps> = ({ control }) => {
  const options = [
    {
      label: "Per Day",
      value: Package_Charge?.PER_DAY,
    },
    {
      label: "Per Person",
      value: Package_Charge.PER_PERSON,
    },
  ];
  return (
    <div className="z-50">
      <Controller
        control={control}
        name="cost_type"
        render={({ field: { onChange, onBlur, value } }) => (
          <SelectInput
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            label="Cost Type"
            id="const_type"
            options={options}
            required
          />
        )}
      />
    </div>
  );
};

export default PackageCostType;
