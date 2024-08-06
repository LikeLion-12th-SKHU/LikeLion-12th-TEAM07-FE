import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/apiConfig'; // axios 인스턴스 가져오기
import {
    Container,
    ContainerButton,
    Name,
    Logo,
    PlayerCount,
    NameContainer,
} from '../css/GameList.js';
import logoImage from '../assets/logo.png';
import useInfiniteScroll from '../hooks/useInfiniteScroll.js';

const GameRoomList = ({ rooms, isresponse }) => {
    const [displayedRooms, setDisplayedRooms] = useState(rooms);
    const navigate = useNavigate();
    console.log(rooms);
    const props = isresponse;
    const loadMoreData = async (page) => {
        const PAGE_SIZE = 10;
        const startIndex = (page - 1) * PAGE_SIZE;
        const newRooms = rooms.slice(startIndex, startIndex + PAGE_SIZE);

        if (newRooms.length > 0) {
            setDisplayedRooms((prevRooms) => [...prevRooms, ...newRooms]);
            return true;
        } else {
            return false;
        }
    };

    const handleJoinRoom = async (roomId) => {
        try {
            await axiosInstance.post(`/api/rooms/${roomId}/join`);
            navigate(`/room/${roomId}`, { state: { roomId } });
        } catch (error) {
            console.error('방 참여 실패', error);
            alert('방 참여에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const { containerRef } = useInfiniteScroll(loadMoreData);

    return (
        <Container ref={containerRef}>
            {displayedRooms.length > 0 ? (
                displayedRooms.map((room) => (
                    <ContainerButton
                        key={room.id}
                        onClick={() => handleJoinRoom(props.data.gameRooms.id)} // 클릭 시 방 참여
                    >
                        <NameContainer>
                            <Logo>
                                <img
                                    className="logo"
                                    src={logoImage}
                                    alt="LikeLiar"
                                />
                            </Logo>
                            <Name>{room.name}</Name>
                        </NameContainer>
                        <PlayerCount>1 / {room.playerCount} 명 </PlayerCount>
                    </ContainerButton>
                ))
            ) : (
                <div></div>
            )}
        </Container>
    );
};

export default GameRoomList;
