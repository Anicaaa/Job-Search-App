import React from "react";
import "../styles/job.css";

const Job = ({ title, skills, details, link }) => {
  return (
    <div className="job">
      <h2>{title}</h2> &nbsp;
      <ol className="skills-details">
        <li>{skills}</li> &nbsp;
        <li>
          <strong>Details:</strong> {details}
        </li>
        &nbsp;
        <li>
          <strong>Website: </strong>
          <a href="https://www.upwork.com/">{link}</a>
        </li>
      </ol>
    </div>
  );
};

export default Job;
