import React from "react";
import fakeData from "./../MOCK_DATA.json";
import { useTable } from "react-table";
import "./Listtablestyle.css";

const Listtable = () => {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "No",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Car",
        accessor: "Car",
      },
      {
        Header: "Start Rent",
        accessor: "Start rent",
      },
      {
        Header: "Finish Rent",
        accessor: "Finish Rent",
      },
      {
        Header: "Price",
        accessor: "Price",
      },
      {
        Header: "Catagory",
        accessor: "Catagory",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="container1">
      <table className=" w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Listtable;
