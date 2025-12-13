import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import ClubList from "./components/ClubList";
import CyclistList from "./components/CyclistList";

function App() {
  return (
    <div className="App">
      <h1>Women Cyclists in France</h1>
      <ClubList />
      <CyclistList />
    </div>
  );
}

export default App;
