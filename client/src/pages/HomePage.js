import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [clubCount, setClubCount] = useState(0);
  const [cyclistCount, setCyclistCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const clubs = await axios.get("http://localhost:5000/api/clubs");
      const cyclists = await axios.get("http://localhost:5000/api/cyclists");
      setClubCount(clubs.data.length);
      setCyclistCount(cyclists.data.length);
    };
    fetchCounts();
  }, []);

  return (
    <div className="home-page-content">
      <h2>Overview</h2>
      <p><strong>Clubs:</strong> {clubCount}</p>
      <p><strong>Cyclists:</strong> {cyclistCount}</p>
    </div>
  );
};

export default HomePage;
