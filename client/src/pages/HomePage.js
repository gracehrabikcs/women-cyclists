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
    <div id="wrapper">
      <header id="header">
        <h1>Women Cyclists in France Dashboard</h1>
      </header>

      <section id="main">
        <div className="inner">
          <div style={{ marginBottom: "2rem" }}>
            <h2>Overview</h2>
            <p>Clubs: {clubCount}</p>
            <p>Cyclists: {cyclistCount}</p>
          </div>

          <div>
            <Link to="/clubs" className="button">View Clubs</Link>
            <Link to="/cyclists" className="button" style={{ marginLeft: "1rem" }}>View Cyclists</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
