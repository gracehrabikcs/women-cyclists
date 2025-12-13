import React, { useState, useEffect } from "react";
import axios from "axios";

const CyclistForm = ({ fetchCyclists }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ID_club, setIDClub] = useState("");
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/clubs");
        setClubs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClubs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/cyclists", {
        nom,
        prenom,
        ID_club
      });
      setNom("");
      setPrenom("");
      setIDClub("");
      fetchCyclists();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Last Name"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="First Name"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />
      <select
        value={ID_club}
        onChange={(e) => setIDClub(e.target.value)}
        required
      >
        <option value="">Select Club</option>
        {clubs.map((club) => (
          <option key={club.ID_club} value={club.ID_club}>
            {club.nom_club}
          </option>
        ))}
      </select>
      <button type="submit">Add Cyclist</button>
    </form>
  );
};

export default CyclistForm;
