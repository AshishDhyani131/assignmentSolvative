import React, { useRef, useState } from "react";
import { useFetchData } from "../hooks/fetchData";
import Loader from "./Loader";

const PlacesTable = ({ inputSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cityCount, setCityCount] = useState(5);
  const [isError, isLoading, tableData] = useFetchData({
    inputSearch,
    cityCount,
  });
  const countRef = useRef(null);

  function handleCountSubmit(e) {
    e.preventDefault();
    const count = parseInt(e.target.cityCount.value);
    if (count > 10) {
      alert("Count to high");
      countRef.current.value = cityCount;
      return;
    }
    setCityCount(count);
  }

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const currentData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="placesTable">
        <thead>
          <tr className="borderBottom">
            <th>#</th>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>
                <Loader></Loader>
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              {" "}
              <td>Something went wrong</td>
            </tr>
          )}
          {inputSearch == "" && tableData.length === 0 ? (
            <tr>
              <td>Search Something</td>
            </tr>
          ) : null}
          {currentData.map((ele, index) => (
            <tr className="borderBottom" key={ele.id}>
              <td>{index + 1}</td>
              <td>{ele.city}</td>
              <td>{ele.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleClick(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <form id="searchNo" className="searchBar" onSubmit={handleCountSubmit}>
          <input
            type="number"
            name="cityCount"
            defaultValue={cityCount}
            ref={countRef}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default PlacesTable;
