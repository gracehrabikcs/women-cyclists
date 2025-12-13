import React, { useState, useEffect } from "react";
import axios from "axios";
import ClubForm from "./ClubForm";

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clubs");
      setClubs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteClub = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/clubs/${id}`);
      fetchClubs();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  return (
    <div>
      <h2>Clubs</h2>
      <ClubForm fetchClubs={fetchClubs} />
      <ul>
        {clubs.map((club) => (
          <li key={club.ID_club}>
            {club.nom_club} - {club.mixite_club}{" "}
            <button onClick={() => deleteClub(club.ID_club)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;
