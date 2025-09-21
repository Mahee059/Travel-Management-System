/* eslint-disable @typescript-eslint/no-explicit-any */
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { delete_package, get_all_packages } from "../../../api/package.api";
import toast, { LoaderIcon } from "react-hot-toast";
import ActionButtons from "../../../components/common/action-button";


const PackageList = () => {
  const queryClinet = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: delete_package,
    onSuccess: (response) => {
      toast.success(response.message);
      queryClinet.invalidateQueries({ queryKey: ["get_all_packages"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDelete = (info: any) => {
    console.log(info)
   mutate(info?.row?.original?._id)
  }; 

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("title", {
      header: () => <span>Package Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total_charge", {
      id: "total_charge",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Price(NPR.)</span>,
    }),
    columnHelper.accessor("start_date", {
      id: "start_date",
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
      header: () => <span>Start Date</span>,
    }),
    columnHelper.accessor("end_date", {
      id: "end_date",
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
      header: () => <span>End Date</span>,
    }),
    columnHelper.accessor("total_seats", {
      id: "total_seats",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Total Seats</span>,
    }),
    columnHelper.accessor("seats_available", {
      id: "seats_available",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Vacant Seats</span>,
    }),

    columnHelper.accessor("createdAt", {
      id: "createdAt",
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
      header: () => <span>Created At</span>,
    }),
    columnHelper.accessor("updatedAt", {
      id: "updatedAt",
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
      header: () => <span>Updated At</span>,
    }),
    columnHelper.accessor("_", {
      id: "actions",
      cell: (info) => (
        <ActionButtons
          onDlete={() => {
            onDelete(info);
          }}
          info={info}
        />
      ),
      header: () => <span>Actions</span>,
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
