import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useState, useEffect } from "react";

import { movieList } from "./movieListArr";

function App() {
  const [allData, setAllData] = useState([...movieList]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    console.log("All data:", allData);
    console.log("Filter Data:", filteredData);
  }, [allData, filteredData]);
  return (
    <div className="wrapper">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar setFilteredData={setFilteredData} allData={allData} />
      </div>
      <MovieGrid filteredData={filteredData} />
    </div>
  );
}

export default App;
