/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface IProps {
  columns: any[];
  data: any[];
}
const Table: React.FC<IProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className=" w-full rounded-t-md overflow-auto min-h-[400px]">
      <table className=" w-full">
        <thead className="bg-emerald-600 h-13 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="h-13 border-b-1 border-emerald-100 text-black/80"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="text-center" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
