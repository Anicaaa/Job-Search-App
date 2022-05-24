// Components
import Navbar from "./components/Navbar";
import Job from "./components/Job";

// Hooks
import { useEffect, useState } from "react";

// Styles
import "./styles/App.css";

// Links
// npx json-server --watch db/jobs_working.json
// yt video https://www.youtube.com/watch?v=MY6ZZIn93V8

// Todo list
// 1. Reset the search bar after clicking the sumit button - setSearch("");
// 2. Type a key word which will automatically give you the result matching the characters without the need to click on the search button.

// 4. Click on CV which takes to a new page where the user can add name, surname, email and a cv.
// 5. Attach button with magnifying glass with search input. NO GAP in between.

function App() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");

  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState([]);

  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

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
      <Navbar
        navToggle={navToggle}
        icon={icon}
        setIcon={setIcon}
        active={active}
        setActive={setActive}
      />
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
