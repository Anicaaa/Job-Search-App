// Components
import Job from "./Job";

// Hooks
import { useEffect, useState } from "react";

// Styles
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1>Find the right job here</h1>
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="jobs">
        <Job />
      </div>
    </div>
  );
}

export default App;

//Todo list
