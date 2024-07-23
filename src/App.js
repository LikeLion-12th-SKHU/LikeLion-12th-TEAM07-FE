import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGame from "./components/createGame"; // 방 만들기
import Home from "./components/Home"; // 홈
import Lobby from "./components/Lobby"; // 로비
import Ranking from "./components/Ranking"; // 랭킹
import AutoAudio from "./components/AutoAudio"; // 배경음악
import Setting from "./components/Setting"; // 설정
import GameRoom from "./components/GameRoom"; // 게임 방
import GameRoomList from "./components/GameRoomList"; // 게임 방 목록
import LoginPage from "./components/LoginPage"; // 로그인 페이지
import RoomSettings from "./components/RoomSettings"; // 방 설정
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [volume, setVolume] = useState(
    parseFloat(localStorage.getItem("volume")) || 1
  );
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

    const handleCreateGame = (newRoom) => {
        setRooms((prevRooms) => [...prevRooms, { ...newRoom, id: Date.now() }]);
        console.log('새로운 방이 생성:', newRoom);
    };
  
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    localStorage.setItem("volume", newVolume);
  };

  const handleCreateGame = (newRoom) => {
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    console.log("새로운 방이 생성:", newRoom);
  };

    return (
        <Router>
          <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
                        <Lobby
                            openSettings={() => setIsSettingOpen(true)}
                            rooms={rooms}
                        />
                    }
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
                    path="/Home-go"
                    element={
                        <Home openSettings={() => setIsSettingOpen(true)} />
                    }
                />
                <Route
                    path="/Ranking-go"
                    element={
                        <Ranking openSettings={() => setIsSettingOpen(true)} />
                    }
                />
                <Route
                    path="/room/:roomId"
                    element={
                        <GameRoom openSettings={() => setIsSettingOpen(true)} />
                    }
                />
                <Route path="/rooms" element={<GameRoomList rooms={rooms} />} />
                <Route
                    path="/room-settings"
                    element={
                        <RoomSettings
                            openSettings={() => setIsSettingOpen(true)}
                            onUpdate={handleUpdateRoom}
                        />
                    }
                />
            </Routes>
            <AutoAudio volume={volume} />
            {isSettingOpen && (
                <Setting
                    onClose={() => setIsSettingOpen(false)}
                    onVolumeChange={handleVolumeChange}
                />
            )}
          </AuthProvider> 
     </Router>
  );
}

export default App;
