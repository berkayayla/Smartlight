import React from "react";
import { useTable, useSortBy } from "react-table";
import { CaretDownFill, CaretUpFill, Transaction } from "grommet-icons";
import Styles from "@/components/tables/table.module.scss";

const columns = [
  {
    Header: "Device Name",
    accessor: "device_name",
  },
  {
    Header: "Device EU",
    accessor: "device_eu",
  },
  {
    Header: "Priority",
    accessor: "priority",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    accessor: "action",
  },
];

const data = [
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
  {
    device_name: "ABPHW4-01",
    device_eu: "54SDF86SV416S4D89SDF46",
    priority: 9,
    status: (
      <span class="badge bg-success-subtle text-secondary">COMPLETE</span>
    ),
    action: "..",
  },
];

export default function Table1() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="table-responsive">
      <table
        className={`${Styles.table} table table-responsive`}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className={Styles.th_wrap}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <CaretDownFill size="14" />
                        ) : (
                          <CaretUpFill size="14" />
                        )
                      ) : (
                        <Transaction size="14" />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
