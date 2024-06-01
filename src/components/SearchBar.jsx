import React from "react";

const SearchBar = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input type="text" />
      <button type="button">Search</button>
    </form>
  );
};

export default SearchBar;
