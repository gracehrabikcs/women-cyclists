import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ClubDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/clubs/${id}`);
        setClub(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClub();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/clubs/${id}`, club);
      alert("Club updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/clubs/${id}`);
      alert("Club deleted!");
      navigate("/clubs");
    } catch (err) {
      alert(err.response?.data?.message || "Cannot delete club");
    }
  };

  if (!club) return <div>Loading...</div>;

  return (
    <div className="club-detail-page">
      <h2>Club Detail</h2>

      <div>
        <label>ID_club:</label>
        <input
          type="number"
          value={club.ID_club || 0}
          onChange={(e) =>
            setClub({ ...club, ID_club: parseInt(e.target.value) || 0 })
          }
        />
      </div>

      <div>
        <label>Nom du club:</label>
        <input
          value={club.nom_club || ""}
          onChange={(e) => setClub({ ...club, nom_club: e.target.value })}
        />
      </div>

      <div>
        <label>Date création:</label>
        <input
          type="number"
          value={club.date_crea || 0}
          onChange={(e) =>
            setClub({ ...club, date_crea: parseInt(e.target.value) || 0 })
          }
        />
      </div>

      <div>
        <label>Date disparition:</label>
        <input
          type="number"
          value={club.date_disp || 0}
          onChange={(e) =>
            setClub({ ...club, date_disp: parseInt(e.target.value) || 0 })
          }
        />
      </div>

      <div>
        <label>Mixité:</label>
        <select
          value={club.mixite_club || "Oui"}
          onChange={(e) => setClub({ ...club, mixite_club: e.target.value })}
        >
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>

      <div>
        <label>ID_comite:</label>
        <input
          value={club.ID_comite || ""}
          onChange={(e) => setClub({ ...club, ID_comite: e.target.value })}
        />
      </div>

      <div>
        <label>Remarques:</label>
        <textarea
          value={club.remarque_club || ""}
          onChange={(e) => setClub({ ...club, remarque_club: e.target.value })}
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleUpdate}>Update Club</button>
        <button
          onClick={handleDelete}
          style={{ marginLeft: "1rem", color: "red" }}
        >
          Delete Club
        </button>
      </div>
    </div>
  );
};

export default ClubDetail;
