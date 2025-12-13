// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [clubCount, setClubCount] = useState(0);
  const [cyclistCount, setCyclistCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const clubs = await axios.get("http://localhost:5000/api/clubs");
        const cyclists = await axios.get("http://localhost:5000/api/cyclists");
        setClubCount(clubs.data.length);
        setCyclistCount(cyclists.data.length);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="dashboard-content">
      <h1>Women Cyclists in France Dashboard</h1>
      <div>
        <h3>Clubs: {clubCount}</h3>
        <h3>Cyclists: {cyclistCount}</h3>
      </div>
      <div className="page-links">
        <Link to="/clubs">View Clubs</Link> | <Link to="/cyclists">View Cyclists</Link>
      </div>
    </div>
  );
};

export default Dashboard;
