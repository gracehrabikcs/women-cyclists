import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CyclistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cyclist, setCyclist] = useState(null);

  useEffect(() => {
    const fetchCyclist = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cyclists/${id}`);
        setCyclist(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCyclist();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/cyclists/${id}`, cyclist);
      alert("Cyclist updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/cyclists/${id}`);
      alert("Cyclist deleted!");
      navigate("/cyclists");
    } catch (err) {
      alert(err.response?.data?.message || "Cannot delete cyclist");
    }
  };

  if (!cyclist) return <div>Loading...</div>;

  return (
    <div className="cyclist-detail-page">
      <h2>Cyclist Detail</h2>

      <div className="detail-form">
        <div className="form-row">
          <label>ID_coureuse</label>
          <input
            type="number"
            value={cyclist.ID_coureuse}
            onChange={(e) =>
              setCyclist({ ...cyclist, ID_coureuse: parseInt(e.target.value) || 0 })
            }
          />
        </div>

        <div className="form-row">
          <label>Nom</label>
          <input
            value={cyclist.nom || ""}
            onChange={(e) => setCyclist({ ...cyclist, nom: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Prénom</label>
          <input
            value={cyclist.prenom || ""}
            onChange={(e) => setCyclist({ ...cyclist, prenom: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Date de Naissance</label>
          <input
            value={cyclist.dateNaiss || ""}
            onChange={(e) => setCyclist({ ...cyclist, dateNaiss: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Date de Décès</label>
          <input
            value={cyclist.dateMort || ""}
            onChange={(e) => setCyclist({ ...cyclist, dateMort: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Fonctions</label>
          <input
            value={cyclist.fonctions || ""}
            onChange={(e) => setCyclist({ ...cyclist, fonctions: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>ID_club</label>
          <input
            type="number"
            value={cyclist.ID_club || 0}
            onChange={(e) =>
              setCyclist({ ...cyclist, ID_club: parseInt(e.target.value) || 0 })
            }
          />
        </div>

        <div className="form-row">
          <label>ID_comite</label>
          <input
            value={cyclist.ID_comite || ""}
            onChange={(e) => setCyclist({ ...cyclist, ID_comite: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Remarque</label>
          <textarea
            rows="4"
            value={cyclist.remarque_coureuse || ""}
            onChange={(e) =>
              setCyclist({ ...cyclist, remarque_coureuse: e.target.value })
            }
          />
        </div>

        <div className="form-actions">
          <button onClick={handleUpdate}>Update Cyclist</button>
          <button className="danger" onClick={handleDelete}>
            Delete Cyclist
          </button>
        </div>
      </div>
    </div>
  );

};

export default CyclistDetail;
