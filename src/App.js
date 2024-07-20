import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGame from "./components/createGame";
import Home from "./components/Home";
import Lobby from "./components/Lobby.jsx";
import Ranking from "./components/Ranking.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/Home-go" element={<Home />} />
        <Route path="/Ranking-go" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
