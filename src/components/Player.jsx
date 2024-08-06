import React from 'react';
import {
    PlayerContainer,
    Number1,
    Number2,
    Number3,
    Number4,
    Number5,
    Number6,
    Name,
} from '../css/PlayerCss.js';

const Player = ({ players }) => {
    const NumberComponents = [
        Number1,
        Number2,
        Number3,
        Number4,
        Number5,
        Number6,
    ];

    // joinMemberNames가 null인 경우 빈 배열로 대체
    const joinMemberNames = players.data.joinMemberNames || [];

    // 플레이어 리스트를 6명으로 맞추기 위해 빈 자리 채우기
    const filledPlayers = [
        ...joinMemberNames,
        ...Array(6 - joinMemberNames.length).fill(''),
    ];

    return (
        <>
            {filledPlayers.map((name, index) => {
                const NumberComponent = NumberComponents[index];
                const displayName = name && name.trim() ? name : '• • •';
                return (
                    <PlayerContainer key={index}>
                        <NumberComponent />
                        <Name>{displayName}</Name>
                    </PlayerContainer>
                );
            })}
        </>
    );
};

export default Player;
