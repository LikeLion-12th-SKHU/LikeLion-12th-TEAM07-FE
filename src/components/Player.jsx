import { PlayerContainer } from '../css/PlayerCss.js';
import {
    Number1,
    Number2,
    Number3,
    Number4,
    Number5,
    Number6,
} from '../css/PlayerCss.js';
const Player = () => {
    return (
        <>
            <PlayerContainer>
                <Number1 />
            </PlayerContainer>
            <PlayerContainer>
                <Number2 />
            </PlayerContainer>
            <PlayerContainer>
                <Number3 />
            </PlayerContainer>
            <PlayerContainer>
                <Number4 />
            </PlayerContainer>
            <PlayerContainer>
                <Number5 />
            </PlayerContainer>
            <PlayerContainer>
                <Number6 />
            </PlayerContainer>
        </>
    );
};
export default Player;
