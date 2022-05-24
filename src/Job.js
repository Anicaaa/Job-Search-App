import React from "react";

const Job = ({ title, skills, details, link }) => {
  return (
    <div className="job">
      <h2 className="title">{title}</h2> &nbsp;
      <ol className="skills-details">
        <li>{skills}</li> &nbsp;
        <li>{details}</li> &nbsp;
        <li>
          <a href="">{link}</a>
        </li>
      </ol>
    </div>
  );
};

export default Job;
