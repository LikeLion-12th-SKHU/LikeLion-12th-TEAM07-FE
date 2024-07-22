import React from 'react';
import { Link } from 'react-router-dom';

const GameRoomList = ({ rooms }) => {
    return (
        <div>
            <ul>
                {rooms.length > 0 ? (
                    rooms.map((room, index) => (
                        <li key={index}>
                            <Link to={`/room/${index}`}>{room.name}</Link>
                        </li>
                    ))
                ) : (
                    <br />
                )}
            </ul>
        </div>
    );
};

export default GameRoomList;
