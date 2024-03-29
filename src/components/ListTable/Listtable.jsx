import { useMemo, useState, useEffect, useCallback } from "react";
import { useTable, useSortBy } from "react-table";
import ReactPaginate from "react-paginate";
import "./Listtablestyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../Redux/orderSlice";
import debounce from "lodash/debounce";
import { formatDate } from "../../helper/formatDate";
import { formatCurrency } from "../../helper/formatCurrency";

const Listtable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [forcedPage, setForcedPage] = useState(null);
  const [isDataFetching, setIsDataFetching] = useState(false);
  const dispatch = useDispatch();
  const { orders, totalCount, error } = useSelector((state) => state.orders);

  const debouncedFetchOrders = useCallback(
    debounce(({ currentPage, rowsPerPage }) => {
      dispatch(fetchOrders({ currentPage, rowsPerPage }));
    }, 200),
    [dispatch]
  );

  const PER_PAGE_OPTIONS = [10, 20, 50, 100];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api-car-rental.binaracademy.org/admin/v2/order?sort=user_email:asc&page=${
  //           currentPage + 1
  //         }&pageSize=${rowsPerPage}`,
  //         {
  //           headers: {
  //             access_token:
  //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
  //           },
  //         }
  //       );
  //       const result = await response.json();
  //       console.log("API Response:", result); // Log the API response
  //       setData(result.orders);
  //       setTotalCount(result.count);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage, rowsPerPage]);

  useEffect(() => {
    debouncedFetchOrders({ currentPage, rowsPerPage });
  }, [currentPage, rowsPerPage, debouncedFetchOrders]);

  useEffect(() => {
    setIsDataFetching(true); //  Set isFetching ke true sebelum fetching data biar ga kedap kedip

    debouncedFetchOrders({ currentPage, rowsPerPage });

    setIsDataFetching(false); // Set isFetching ke false abis fetching data biar ga kedap kedip
  }, [currentPage, rowsPerPage, debouncedFetchOrders]);

  const pageCount = Math.ceil(totalCount / rowsPerPage);

  const handlePageChange = (selectedPageNumber) => {
    setCurrentPage(selectedPageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0); // Reset ke first page abis jump ke page lainnya
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
        accessor: (row) => formatDate(row.start_rent_at),
      },
      {
        Header: "Finish Rent",
        accessor: (row) => formatDate(row.finish_rent_at),
      },
      {
        Header: "Price",
        accessor: (row) => formatCurrency(row.total_price),
      },
    ],
    [currentPage, rowsPerPage]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: orders }, useSortBy);

  return (
    <div>
      {isDataFetching ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="container1">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    {...headerGroup.getHeaderGroupProps()}
                  >
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
            <div className="pagination-options flex gap-4">
              <div className="limit">
                <span>Limit:</span>
                <br />
                <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                  {PER_PAGE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="jump-to-page-container">
                <div className="jump-to-page-wrapper">
                  <span>Jump to page:</span>
                  <div className="jump-to-page-input-wrapper flex items-center relative">
                    <input
                      type="text"
                      id="jump-to-page-input"
                      className="jump-to-page-input"
                      placeholder="Enter"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // digit doang
                        e.target.value = value;
                      }}
                    />
                    <button
                      className="increment-button absolute top-1 left-10"
                      onClick={() => {
                        const input =
                          document.getElementById("jump-to-page-input");
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

                    <button
                      className="jump-to-page-button w-11 h-9 self-center"
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
                </div>
              </div>
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
        </>
      )}
    </div>
  );
};

export default Listtable;
