import React, { useState, useEffect } from "react";
import axios from "axios";
import CyclistForm from "./CyclistForm";

const CyclistList = () => {
  const [cyclists, setCyclists] = useState([]);

  const fetchCyclists = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cyclists");
      setCyclists(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCyclist = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cyclists/${id}`);
      fetchCyclists();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCyclists();
  }, []);

  return (
    <div>
      <h2>Cyclists</h2>
      <CyclistForm fetchCyclists={fetchCyclists} />
      <ul>
        {cyclists.map((c) => (
          <li key={c.ID_coureuse}>
            {c.nom} {c.prenom} - Club ID: {c.ID_club}{" "}
            <button onClick={() => deleteCyclist(c.ID_coureuse)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CyclistList;
