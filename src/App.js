// Components
import Home from "./components/Home";
import CV from "./components/CV";

// Hooks
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Styles
import "./styles/App.css";
import "./styles/navbar.css";

// Links
// npx json-server --watch db/jobs_working.json
// yt video https://www.youtube.com/watch?v=MY6ZZIn93V8

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
    //console.log(response);
    const data = await response.json();
    //console.log(data);
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
      <nav className="nav">
        <a className="nav-link" href="#">
          Search a Job
        </a>
        <ul className={active}>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cv">
              CV
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              jobs={jobs}
              search={search}
              setSearch={setSearch}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
