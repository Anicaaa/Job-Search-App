// Components
import Job from "./Job";

// Hooks
import { useEffect, useState } from "react";

// Styles
import "./App.css";

// Links
// npx json-server --watch db/jobs_working.json
// yt video https://www.youtube.com/watch?v=MY6ZZIn93V8

// Todo list
// 1. Reset the search bar after clicking the sumit button - setSearch("");
// 2. Type a key word which will automatically give you the result matching the characters without the need to click on the search button.

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getJobs();
  }, [search]);

  const getJobs = async () => {
    const response = await fetch("http://localhost:3000/jobs");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setJobs(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = jobs.filter((job) =>
      job.Detail.toLowerCase().includes(search)
    );
    setJobs(filter);
  };

  return (
    <div className="App">
      <h1 className="job-sentence">Find the right job today!</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          🔎
        </button>
      </form>
      <div className="jobs">
        {jobs.map((job) => (
          <Job
            key={job.id}
            title={job.Title}
            link={job.JobPageLink}
            skills={job.Skill}
            details={job.Detail}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
