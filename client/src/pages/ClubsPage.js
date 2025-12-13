import React, { useEffect, useState } from "react";
import axios from "axios";
import ClubForm from "../components/ClubForm";
import { Link } from "react-router-dom";

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchClubs = async () => {
    const res = await axios.get("http://localhost:5000/api/clubs");
    setClubs(res.data);
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const filteredClubs = clubs.filter(club =>
    club.nom_club.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Clubs</h1>
      <input
        type="text"
        placeholder="Search clubs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ClubForm fetchClubs={fetchClubs} />
      <ul>
        {filteredClubs.map(club => (
          <li key={club.ID_club}>
            <Link to={`/clubs/${club.ID_club}`}>
              {club.nom_club} - {club.mixite_club}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubsPage;
