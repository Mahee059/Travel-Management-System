/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useState } from "react";
import { useController, type Control } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
interface IProps {
  label: string;
  id: string;
  required?: boolean;
  control: Control<any>;
  name: string;
  multiple?: boolean;
  max_count?: number;
}

const ImageInput: React.FC<IProps> = ({
  label,
  id,
  required = false,
  control,
  multiple = false,
  name,
  max_count = 5,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [preview, setPreviews] = useState<null | string[]>(null);

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const onFileChage = (files: FileList | null) => {
    if (!files) return;

    console.log(files);
    console.log("value", value);
    const images = multiple ? new Array(...files) : files;

    const new_images = [...images, ...value].slice(0, max_count);

    onChange(multiple ? new_images : images);
    const previewImages =
      multiple && Array.isArray(images)
        ? new_images.map((file) => URL.createObjectURL(file))
        : [URL.createObjectURL(files[0])];
    setPreviews(previewImages);
  };

  const onRemoveImage = (index: number) => {
    const images = multiple
      ? value.filter((_: any, i: number) => index !== i)
      : null;
    onChange(images);
    setPreviews(images?.map((file: File) => URL.createObjectURL(file)));
  };

  const onClick = () => {
    if (!ref.current) return;

    ref?.current?.click();
  };

  console.log(preview);
  return (
    <div>
      <div className="flex mb-1">
        <label htmlFor={id} className="text-lg font-normal  text-gray-900">
          {label}
        </label>
        {required && <LuAsterisk className="text-red-400" />}
      </div>
      <div
        id={id}
        onClick={onClick}
        className="h-[150px] w-full bg-white/50 rounded-md border border-dashed border-emerald-300 cursor-pointer flex items-center justify-center"
      >
        <input
          maxLength={max_count}
          onChange={(e) => {
            onFileChage(e.target.files);
          }}
          multiple={multiple}
          ref={ref}
          className="hidden"
          type="file"
        />
        <div className="text-center">
          <p className="text-sm text-emerald-400">Click to upload image</p>
          <p className="text-xs text-gray-600">
            {multiple
              ? `Upload upto ${max_count} files each of 5MB`
              : "Max 5MB supported"}
          </p>
          <p className="text-xs text-red-500">{error && error?.message}</p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap">
        {preview?.map((image, i) => {
          return (
            <div className="group relative h-30 aspect-square rounded-md overflow-clip border border-gray-300 p-0.5">
              <img
                src={image}
                className="h-full w-full rounded-md overflow-clip object-fit"
              />
              <IoClose
                onClick={() => onRemoveImage(i)}
                size={22}
                className="text-red-500 absolute top-1 right-1 z-20 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageInput;
