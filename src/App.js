import "./App.css";
import SearchBar from "./components/SearchBar";
import PlacesTable from "./components/placesTable";
import { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <SearchBar handleSearch={setInputSearch}></SearchBar>
      <PlacesTable inputSearch={inputSearch}></PlacesTable>
    </>
  );
}

export default App;
