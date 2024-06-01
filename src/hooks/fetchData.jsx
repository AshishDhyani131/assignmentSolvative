import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "23af4eba27msh21a5d6276ef18a6p19ff70jsn0becaefd3e8b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export function useFetchData({ inputSearch, cityCount }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    if (!inputSearch) return;
    (async function getData() {
      setIsLoading(true);
      try {
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=IN&namePrefix=${inputSearch}&limit=${cityCount}`;

        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Something went wrong");
        const result = await response.json();
        setTableData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [inputSearch, cityCount]);
  return [isError, isLoading, tableData];
}
