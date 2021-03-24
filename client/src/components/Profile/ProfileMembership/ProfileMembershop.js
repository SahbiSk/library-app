import React, { useState } from "react";
import "./ProfileMembershop.css";

const ProfileMembershop = () => {
  const [dateDebut, setDateDebut] = useState(new Date("11/10/2020"));
  const [dateFin, setDateFin] = useState(new Date("11/11/2020"));
  console.log(dateFin);

  return (
    <div className="membership">
      <h2>Membership Details :</h2>
      <h3>date de début : {dateDebut.toDateString()} </h3>
      <h3>date de Fin : {dateFin.toDateString()} </h3>
    </div>
  );
};

export default ProfileMembershop;
