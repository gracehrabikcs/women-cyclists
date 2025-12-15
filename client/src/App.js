import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClubsPage from "./pages/ClubsPage";
import CyclistsPage from "./pages/CyclistsPage";
import ClubDetail from "./pages/ClubDetail";
import CyclistDetail from "./pages/CyclistDetail";

function App() {
  return (
    <Router>
        {/* Header */}
        <header id="header">
          <h1>Women Cyclists in France</h1>
          {/* HTML5 UP Nav */}
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/clubs">Clubs</Link></li>
              <li><Link to="/cyclists">Cyclists</Link></li>
            </ul>
          </nav>
        </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/cyclists" element={<CyclistsPage />} />
        <Route path="/clubs/:id" element={<ClubDetail />} />
        <Route path="/cyclists/:id" element={<CyclistDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
