import React from "react";
import style from "./job.css";

const Job = ({ title, skills, details }) => {
  return (
    <div className={style.job}>
      <h1 className="title">{title}</h1>
      <ol>
        <li>{skills}</li>
        <li>{details}</li>
      </ol>
    </div>
  );
};

export default Job;
