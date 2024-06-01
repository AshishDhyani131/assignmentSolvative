import React from "react";
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
  return (
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
        {data.map((ele, index) => (
          <tr className="borderBottom" key={index}>
            <td>{index + 1}</td>
            <td>{ele.first}</td>
            <td>{ele.last}</td>
            <td>{ele.handle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlacesTable;
