import React, { useState } from "react";
import axios from "axios";

const ClubForm = ({ fetchClubs }) => {
  const [nom, setNom] = useState("");
  const [mixite, setMixite] = useState("Oui");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/clubs", {
        nom_club: nom,
        mixite_club: mixite
      });
      setNom("");
      fetchClubs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="club-form">
    <input
        type="text"
        placeholder="Club name"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
    />
    <select value={mixite} onChange={(e) => setMixite(e.target.value)}>
        <option value="Oui">Oui</option>
        <option value="Non">Non</option>
    </select>
    <button type="submit">Add Club</button>
    </form>
  );
};

export default ClubForm;
