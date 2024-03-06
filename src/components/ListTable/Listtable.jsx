import React, { useMemo, useState } from "react";
import fakeData from "./../MOCK_DATA.json";
import { useTable } from "react-table";
import "./Listtablestyle.css";
import ReactPaginate from "react-paginate";

const Listtable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Number of items per page
  const PER_PAGE_OPTIONS = [5, 10, 15, 20]; // Options for rows per page

  const data = useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    return fakeData.slice(startIndex, startIndex + rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const pageCount = Math.ceil(fakeData.length / rowsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0); // Reset to the first page when changing rows per page
  };

  const columns = useMemo(
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
        Header: "Category",
        accessor: "Category",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div className="container1">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <div className="pagination-options">
          <span>Rows per page:</span>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>Jump to page:</span>
          <div className="jump-to-page-input-wrapper">
            <input
              type="text"
              id="jump-to-page-input"
              className="jump-to-page-input"
              placeholder="Enter"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Allow only digits
                e.target.value = value;
              }}
            />
            <button
              className="increment-button"
              onClick={() => {
                const input = document.getElementById("jump-to-page-input");
                input.value = parseInt(input.value || "0", 10) + 1;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  fillRule="evenodd"
                  d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className="jump-to-page-button"
            onClick={() => {
              const pageNumber = parseInt(
                document.getElementById("jump-to-page-input").value,
                10
              );
              if (
                !isNaN(pageNumber) &&
                pageNumber >= 1 &&
                pageNumber <= pageCount
              ) {
                setCurrentPage(pageNumber - 1);
              }
            }}
          >
            Go
          </button>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Listtable;
