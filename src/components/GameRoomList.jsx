import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const GameRoomList = ({ rooms }) => {
    const [displayedRooms, setDisplayedRooms] = useState(rooms);
    const navigate = useNavigate();

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

    const handleJoinRoom = (room) => {
        navigate(`/room/${room.id}`, { state: room });
    };

    const { containerRef } = useInfiniteScroll(loadMoreData);

    return (
        <Container ref={containerRef}>
            {displayedRooms.length > 0 ? (
                displayedRooms.map((room) => (
                    <ContainerButton
                        key={room.id}
                        onClick={() => handleJoinRoom(room)}
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
