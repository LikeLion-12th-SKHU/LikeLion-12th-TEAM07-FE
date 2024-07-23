import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGame from "./components/createGame";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import Ranking from "./components/Ranking";
import AutoAudio from "./components/AutoAudio";
import Setting from "./components/Setting";
import GameRoom from "./components/GameRoom";
import GameRoomList from "./components/GameRoomList";
import LoginPage from "./components/LoginPage";
import RoomSettings from "./components/RoomSettings";

function App() {
  const [volume, setVolume] = useState(
    parseFloat(localStorage.getItem("volume")) || 1
  );
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    localStorage.setItem("volume", newVolume);
  };

  const handleCreateGame = (newRoom) => {
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    console.log("새로운 방이 생성:", newRoom);
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
    );
    console.log("업데이트 방 정보:", updatedRoom);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/lobby"
          element={<Lobby openSettings={() => setIsSettingOpen(true)} />}
        />
        <Route
          path="/create-game"
          element={
            <CreateGame
              onCreate={handleCreateGame}
              openSettings={() => setIsSettingOpen(true)}
            />
          }
        />
        <Route
          path="/"
          element={<Home openSettings={() => setIsSettingOpen(true)} />}
        />
        <Route
          path="/ranking"
          element={<Ranking openSettings={() => setIsSettingOpen(true)} />}
        />
        <Route
          path="/room/:roomId"
          element={<GameRoom openSettings={() => setIsSettingOpen(true)} />}
        />
        <Route path="/rooms" element={<GameRoomList rooms={rooms} />} />
        <Route
          path="/room-settings"
          element={<RoomSettings onUpdate={handleUpdateRoom} />}
        />
      </Routes>
      <AutoAudio volume={volume} />
      {isSettingOpen && (
        <Setting
          onClose={() => setIsSettingOpen(false)}
          onVolumeChange={handleVolumeChange}
        />
      )}
    </Router>
  );
}

export default App;
