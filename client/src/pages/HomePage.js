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
    <div>
      <h1>Women Cyclists in France Dashboard</h1>
      <div>Clubs: {clubCount}</div>
      <div>Cyclists: {cyclistCount}</div>
      <div>
        <Link to="/clubs">View Clubs</Link> | <Link to="/cyclists">View Cyclists</Link>
      </div>
    </div>
  );
};

export default HomePage;
