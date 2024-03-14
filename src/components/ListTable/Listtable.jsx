import { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import ReactPaginate from "react-paginate";
import "./Listtablestyle.css";

const Listtable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Number of items per page initially
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [forcedPage, setForcedPage] = useState(null);

  const PER_PAGE_OPTIONS = [5, 10, 15, 20]; // Options for rows per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-car-rental.binaracademy.org/admin/v2/order?sort=user_email:asc&page=${
            currentPage + 1
          }&pageSize=${rowsPerPage}`,
          {
            headers: {
              access_token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
            },
          }
        );
        const result = await response.json();
        console.log("API Response:", result); // Log the API response
        setData(result.orders);
        setTotalCount(result.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, rowsPerPage]);

  const pageCount = Math.ceil(totalCount / rowsPerPage);

  const handlePageChange = (selectedPageNumber) => {
    setCurrentPage(selectedPageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0); // Reset to the first page when changing rows per page
  };

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: (_, index) => currentPage * rowsPerPage + index + 1,
      },
      {
        Header: "Email",
        accessor: "User.email",
        canSort: true,
      },
      {
        Header: "Car",
        accessor: "CarId",
        canSort: true,
      },
      {
        Header: "Start Rent",
        accessor: "start_rent_at",
      },
      {
        Header: "Finish Rent",
        accessor: "finish_rent_at",
      },
      {
        Header: "Price",
        accessor: "total_price",
      },
      {
        Header: "Category",
        accessor: "Category",
      },
    ],
    [currentPage, rowsPerPage]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div>
      <div className="container1 overscroll-none">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(
                      column.canSort ? column.getSortByToggleProps() : {}
                    )}
                  >
                    {column.render("Header")}
                    {column.canSort && (
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {" "}
                      {cell.render("Cell")}{" "}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <div className="pagination-options">
          <span>Limit:</span>
          <br />
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
                setForcedPage(pageNumber - 1); // Zero-based index
                handlePageChange(pageNumber - 1); // Zero-based index
              }
            }}
          >
            Go
          </button>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          onPageChange={(selectedPageNumber) => {
            handlePageChange(selectedPageNumber.selected);
            setForcedPage(null); // Reset forcedPage after page change
          }}
          forcePage={forcedPage !== null ? forcedPage : currentPage}
          containerClassName={"pagination"}
          activeClassName={"active"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="#948989"
                strokeLinecap="square"
                d="m6.5 9.5l-2-2l2-2m3 4l-2-2l2-2"
              ></path>
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="#948989"
                strokeLinecap="square"
                d="m8.5 9.5l2-2l-2-2m-3 4l2-2l-2-2"
              ></path>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Listtable;
