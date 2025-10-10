/* eslint-disable @typescript-eslint/no-explicit-any */
// import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../common/inputs/input";
import { useForm } from "react-hook-form";
import PackageCostType from "../../common/select-inputs/cost-type.select";
import Button from "../../common/button";

import DestinationInput from "./destination_input";
import { useMutation } from "@tanstack/react-query";
import { post_package } from "../../../api/package.api";
import toast from "react-hot-toast";
import type {
  IPackage,
  IPackageData,
} from "../../../interface/tour_package.interface";
import type React from "react";
import ImageInput from "../../common/inputs/image-inputs";

interface IProps {
  data?: IPackage;
}

const CreatePackageform: React.FC<IProps> = ({ data: tour_package }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      title: tour_package?.title || "",
      total_charge: tour_package?.total_charge || "",
      total_seats: tour_package?.total_seats || "",
      start_date: tour_package
        ? new Date(tour_package?.start_date).toLocaleString()
        : new Date(),
      end_date: tour_package?.end_date || new Date(Date.now()).getDate(),
      destinations: tour_package?.destinations || [
        { location: "", time: new Date(Date.now()).getTime() },
      ],
    },
    // resolver: yupResolver(loginSchema),
  });

  const { mutate } = useMutation({
    mutationFn: post_package,
    onSuccess: (response) => {
      reset();
      toast.success(response.message || "package created");
    },
    onError: (error) => {
      toast.error(error.message || "operation failed");
    },
  });

  //   const { mutate:update } = useMutation({
  //     mutationFn: update_package,
  //     onSuccess: (response) => {
  //         reset()
  //         toast.success(response.message || 'package created')
  //     },
  //     onError: (error) => {
  //         toast.error(error.message || 'operation failed')
  //     }
  // })

  const onSubmit = (data: IPackageData) => {
    console.log(data);
    const {
      title,
      cost_type,
      cover_image,
      end_date,
      images,
      total_charge,
      total_seats,
      start_date,
      destinations,
    } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cost_type", cost_type);
    formData.append("end_date", end_date);
    formData.append("start_date", start_date);
    formData.append("destinations", JSON.stringify(destinations));
    formData.append("total_charge", total_charge.toString());
    formData.append("total_seats", total_seats.toString());
    if (cover_image) {
      formData.append("cover_image", cover_image[0]);
    }
    if (images) {
      images.forEach((file) => {
        formData.append("images", file);
      });
    }

    // if (tour_package) {
    // //    update(formData)
    // } else {
    mutate(formData);
    //    }
  };

  return (
    <div className="m-10 p-20 bg-gray-50 rounded-md">
      {/* @ts-expect-error //type */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <Input
            id="title"
            name="title"
            label="Package Title"
            placeholder="Pokhara-Mustang"
            register={register}
            error={errors?.title?.message}
            required
          />

          <Input
            id="total_seats"
            name="total_seats"
            label="Total Capacity"
            placeholder="10"
            register={register}
            error={errors?.total_seats?.message}
            required
          />
          <Input
            id="start_date"
            name="start_date"
            label="Start Date"
            type="date"
            register={register}
            error={errors?.start_date?.message}
            required
          />

          <Input
            id="end_date"
            name="end_date"
            type="date"
            label="End Date"
            register={register}
            error={errors?.start_date?.message}
            required
          />
          <Input
            id="total_charge"
            name="total_charge"
            label="Cost"
            placeholder="1000"
            register={register}
            error={errors?.total_charge?.message}
            required
          />
          <PackageCostType control={control} />

          <ImageInput
            label={"Cover Image"}
            id="cover_image"
            control={control}
            name="cover_image"
          />

          <ImageInput
            label={"Images"}
            id="images"
            control={control}
            name="images"
            max_count={5}
            multiple
          />
        </div>
        {/* destination input */}
        <div>
          <DestinationInput
            control={control}
            register={register}
            value={watch("destinations")}
          />
        </div>

        <div className="flex justify-end mt-10">
          <div className="w-[200px]">
            <Button label={tour_package ? "Update" : "Create"} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePackageform;
