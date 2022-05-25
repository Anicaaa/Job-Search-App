function Home({ jobs, search, setSearch, handleSubmit }) {
  return (
    <div>
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
        {jobs.map((job, index) => (
          <div className="job" key={index}>
            <h2>{job.Title}</h2> &nbsp;
            <ol className="skills-details">
              <li>{job.Skill}</li> &nbsp;
              <li>
                <strong>Details:</strong> {job.Detail}
              </li>
              &nbsp;
              <li>
                <strong>Website: </strong>
                <a href="https://www.upwork.com/">{job.JobPageLink}</a>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
