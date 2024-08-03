import React, { useState, useRef } from 'react';
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
import { AuthProvider } from './contexts/AuthContext';
import MyPage from './components/MyPage';
import GameStart from './components/GameStart';
import GameDiscuss from './components/GameDiscuss';
import FindLiar from './components/FindLiar';
import VotingFinish from './components/VotingFinish';

function App() {
    const [volume, setVolume] = useState(
        parseFloat(localStorage.getItem('volume')) || 1
    );
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [controlMusic, setControlMusic] = useState(true);
    const backgroundMusicRef = useRef(null);

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume);
    };

    const handleCreateGame = (newRoom) => {
        setRooms((prevRooms) => [...prevRooms, { ...newRoom, id: Date.now() }]);
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
            <AuthProvider>
                <Routes>
                    <Route
                        path="/voting-finish"
                        element={<VotingFinish rooms={rooms} />}
                    />
                    <Route
                        path="/liar-find"
                        element={<FindLiar rooms={rooms} />}
                    />
                    <Route
                        path="/game-discuss"
                        element={<GameDiscuss rooms={rooms} />}
                    />
                    <Route
                        path="/login"
                        element={
                            <LoginPage
                                setBackgroundMusic={(status) =>
                                    setControlMusic(status)
                                }
                            />
                        }
                    />
                    <Route
                        path="/lobby"
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
                        path="/"
                        element={
                            <Home
                                setBackgroundMusic={(status) =>
                                    setControlMusic(status)
                                }
                            />
                        }
                    />
                    <Route path="/game-start" element={<GameStart />} />
                    <Route
                        path="/ranking"
                        element={
                            <Ranking
                                setBackgroundMusic={(status) =>
                                    setControlMusic(status)
                                }
                            />
                        }
                    />
                    <Route
                        path="/room/:roomId"
                        element={
                            <GameRoom
                                openSettings={() => setIsSettingOpen(true)}
                            />
                        }
                    />
                    <Route
                        path="/rooms"
                        element={<GameRoomList rooms={rooms} />}
                    />
                    <Route
                        path="/room-settings"
                        element={
                            <RoomSettings
                                openSettings={() => setIsSettingOpen(true)}
                                onUpdate={handleUpdateRoom}
                            />
                        }
                    />
                    <Route
                        path="/mypage"
                        element={
                            <MyPage
                                setBackgroundMusic={(status) =>
                                    setControlMusic(status)
                                }
                            />
                        }
                    ></Route>
                </Routes>
                {controlMusic && (
                    <AutoAudio ref={backgroundMusicRef} volume={volume} />
                )}
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
