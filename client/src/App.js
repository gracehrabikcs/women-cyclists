import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ClubsPage from "./pages/ClubsPage";
import CyclistsPage from "./pages/CyclistsPage";
import ClubDetail from "./pages/ClubDetail";
import CyclistDetail from "./pages/CyclistDetail";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/clubs">Clubs</Link> |{" "}
        <Link to="/cyclists">Cyclists</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/cyclists" element={<CyclistsPage />} />
        <Route path="/clubs/:id" element={<ClubDetail />} />
        <Route path="/cyclists/:id" element={<CyclistDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
