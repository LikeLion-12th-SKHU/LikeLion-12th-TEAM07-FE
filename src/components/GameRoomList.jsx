import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    ContainerButton,
    Name,
    PlayCount,
} from '../css/GameList.js';
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
                        <Name>{room.name}</Name>
                        <PlayCount>{room.playerCount}</PlayCount>
                    </ContainerButton>
                ))
            ) : (
                <div></div>
            )}
        </Container>
    );
};

export default GameRoomList;
