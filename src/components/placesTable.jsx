import React, { useState } from "react";
const data = [
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
  {
    first: "Ashish",
    last: "Dhyani",
    handle: "@handle",
  },
];
const itemsPerPage = 3;
const PlacesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
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
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((ele, index) => (
            <tr className="borderBottom" key={index}>
              <td>{index + 1}</td>
              <td>{ele.first}</td>
              <td>{ele.last}</td>
              <td>{ele.handle}</td>
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
        <form id="searchNo" className="searchBar">
          <input type="number" />
          <button type="button">Search</button>
        </form>
      </div>
    </>
  );
};

export default PlacesTable;
