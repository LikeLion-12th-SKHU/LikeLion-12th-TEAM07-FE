import { PlayerContainer } from '../css/PlayerCss.js';
import {
    Number1,
    Number2,
    Number3,
    Number4,
    Number5,
    Number6,
    Name,
} from '../css/PlayerCss.js';

const Player = () => {
    const PlayerList = [
        { id: 'player1', name: 'mubin' },
        { id: 'player2', name: 'yurim' },
        { id: 'player3', name: 'seoyun' },
        { id: 'player4', name: 'giwoong1' },
        { id: 'player5', name: 'giwoong2' },
        { id: 'player6', name: '' },
    ];
    return (
        <>
            {PlayerList.map((player, index) => {
                const NumberComponent = [
                    Number1,
                    Number2,
                    Number3,
                    Number4,
                    Number5,
                    Number6,
                ][index];
                const displayName =
                    player.name && player.name.trim() ? player.name : '• • •';
                return (
                    <PlayerContainer key={player.id}>
                        <NumberComponent />
                        <Name>{displayName}</Name>
                    </PlayerContainer>
                );
            })}
        </>
    );
};

export default Player;
