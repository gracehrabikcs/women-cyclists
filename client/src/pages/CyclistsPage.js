// src/pages/CyclistsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CyclistForm from "../components/CyclistForm";
import { Link } from "react-router-dom";

const CyclistsPage = () => {
  const [cyclists, setCyclists] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCyclists = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cyclists");
      setCyclists(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCyclists();
  }, []);

  const filteredCyclists = cyclists.filter(c =>
    `${c.nom} ${c.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Cyclists</h1>
      <input
        type="text"
        placeholder="Search cyclists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CyclistForm fetchCyclists={fetchCyclists} />
      <ul>
        {filteredCyclists.map(c => (
          <li key={c.ID_coureuse}>
            <Link to={`/cyclists/${c.ID_coureuse}`}>
              {c.nom} {c.prenom} - Club {c.ID_club || "N/A"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CyclistsPage;
