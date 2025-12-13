import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cyclists, setCyclists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/coureuses")
      .then(res => setCyclists(res.data));
  }, []);

  return (
    <div>
      <h1>Women Cyclists</h1>
      <ul>
        {cyclists.map(c => (
          <li key={c._id}>{c.prenom} {c.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
