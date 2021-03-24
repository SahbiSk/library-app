import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, img, about, title }) => {
  return (
    <div className="team-member">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <h3>{title} </h3>
      <p>{about} </p>
    </div>
  );
};

export default TeamMember;
