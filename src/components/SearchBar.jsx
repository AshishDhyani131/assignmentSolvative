import React from "react";

const SearchBar = ({ handleSearch }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchParam = event.target.searchInput.value;
    handleSearch(searchParam);
  }
  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input type="text" defaultValue={""} name="searchInput" />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
