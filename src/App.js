// Components
import Job from "./Job";

// Hooks
import { useEffect, useState } from "react";

// Styles
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("");

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const response = await fetch("http://localhost:3000/jobs");
    const data = await response.json();
    setJobs(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  /* SEARCH BUTTON and JOB LIST RESULTS
1. fetch the list of jobs and store them in your initial list of jobs state
2. create a new state variable for the search bar text
3. then COMPUTE a filtered list of jobs, based on the search bar text: ie if search includes "nodejs" then only return jobs that have that word in the description
4. the computed filtered list of jobs is what you pass to your JSX/HTML part for showing the jobs
*/

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (
      name === "Nodejs" ||
      name === "Phython" ||
      name === "Web Design" ||
      name === "HTML" ||
      name === "Ruby" ||
      name === "Java" ||
      name === "Web Development"
    ) {
      setSearch({ ...search, [name]: value });
    }
    setSearch("");
  }; 
  
  On line 58 you have the onSubmit={handleSubmit}
  */

  return (
    <div className="App">
      <h1>Find the right job here</h1>
      <form className="search-form" onSubmit={handleSubmit}>
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
        {jobs.map((job) => (
          <Job
            key={job.id}
            title={job.Title}
            level={job.Level}
            skills={job.Skill}
            details={job.Detail}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

//Todo list
