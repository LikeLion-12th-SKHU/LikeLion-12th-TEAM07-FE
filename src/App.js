import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateGame from './components/createGame'; // 방 만들기
import Home from './components/Home'; // 홈
import Lobby from './components/Lobby'; // 로비
import Ranking from './components/Ranking'; // 랭킹
import AutoAudio from './components/AutoAudio'; // 배경음악
import Setting from './components/Setting'; // 설정
import GameRoom from './components/GameRoom'; // 게임 방
import GameRoomList from './components/GameRoomList'; // 게임 방 목록
import LoginPage from './components/LoginPage'; // 로그인 페이지
import RoomSettings from './components/RoomSettings'; // 방 설정

function App() {
    const [volume, setVolume] = useState(
        parseFloat(localStorage.getItem('volume')) || 1
    );
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [rooms, setRooms] = useState([]);

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume);
    };

    const handleCreateGame = (newRoom) => {
<<<<<<< HEAD
        setRooms((prevRooms) => [...prevRooms, { ...newRoom, id: Date.now() }]);
=======
        setRooms((prevRooms) => [...prevRooms, newRoom]);
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
        console.log('새로운 방이 생성:', newRoom);
    };

    const handleUpdateRoom = (updatedRoom) => {
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.id === updatedRoom.id ? updatedRoom : room
            )
        );
        console.log('업데이트 방 정보:', updatedRoom);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
<<<<<<< HEAD
                        <Lobby
                            openSettings={() => setIsSettingOpen(true)}
                            rooms={rooms}
                        />
=======
                        <Lobby openSettings={() => setIsSettingOpen(true)} />
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
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
<<<<<<< HEAD
                    element={
                        <RoomSettings
                            openSettings={() => setIsSettingOpen(true)}
                            onUpdate={handleUpdateRoom}
                        />
                    }
=======
                    element={<RoomSettings onUpdate={handleUpdateRoom} />}
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
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
