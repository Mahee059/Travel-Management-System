/* eslint-disable @typescript-eslint/no-explicit-any */
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { delete_package, get_all_packages } from "../../../api/package.api";
import toast, { LoaderIcon } from "react-hot-toast";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import ActionButtons from "../action-button";

type PackageType = {
  _id: string;
  title: string;
  total_charge: number;
  start_date: string;
  end_date: string;
  total_seats: number;
  seats_available: number;
  createdAt: string;
  updatedAt: string;
};

const PackageList = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: delete_package,
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["get_all_packages"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const onDelete = (info: any) => {
    mutate(info?.row?.original?._id);
  };

  const columnHelper = createColumnHelper<PackageType>();
  const columns = [
    columnHelper.accessor("title", {
      header: () => <span>Package Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total_charge", {
      header: () => <span>Price (NPR)</span>,
      cell: (info) => (
        <div className="flex items-center gap-1">
          <TbCurrencyRupeeNepalese /> <i>{info.getValue()}</i>
        </div>
      ),
    }),
    columnHelper.accessor("start_date", {
      header: () => <span>Start Date</span>,
      cell: (info) => (
        <i>
          {new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(info.getValue()))}
        </i>
      ),
    }),
    columnHelper.accessor("end_date", {
      header: () => <span>End Date</span>,
      cell: (info) => (
        <i>
          {new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(info.getValue()))}
        </i>
      ),
    }),
    columnHelper.accessor("total_seats", {
      header: () => <span>Total Seats</span>,
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("seats_available", {
      header: () => <span>Vacant Seats</span>,
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("createdAt", {
      header: () => <span>Created At</span>,
      cell: (info) => (
        <i>
          {new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(info.getValue()))}
        </i>
      ),
    }),
    columnHelper.accessor("updatedAt", {
      header: () => <span>Updated At</span>,
      cell: (info) => (
        <i>
          {new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(info.getValue()))}
        </i>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: () => <span>Actions</span>,
      cell: (info) => (
        <ActionButtons
          edit_link={`/admin/packages/update/${info.row.original._id}`}
          onDlete={() => onDelete(info)}
          info={info}
        />
      ),
    }),
  ];

  const { isLoading, data } = useQuery({
    queryFn: get_all_packages,
    queryKey: ["get_all_packages"],
  });

  if (isLoading || isPending) {
    return <LoaderIcon className="absolute top-1/2 left-1/2 h-10 w-10" />;
  }

  return (
    <div className="mt-10">
      <Table columns={columns} data={data?.data?.data ?? []} />
    </div>
  );
};

export default PackageList;
