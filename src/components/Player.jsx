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
    return (
        <>
            <PlayerContainer>
                <Number1 />
                <Name>mubin</Name>
            </PlayerContainer>
            <PlayerContainer>
                <Number2 />
                <Name>yurim</Name>
            </PlayerContainer>
            <PlayerContainer>
                <Number3 />
                <Name> seoyun</Name>
            </PlayerContainer>
            <PlayerContainer>
                <Number4 />
                <Name>giwoong</Name>
            </PlayerContainer>
            <PlayerContainer>
                <Number5 />
                <Name>giwoong</Name>
            </PlayerContainer>
            <PlayerContainer>
                <Number6 />
                <Name>. . .</Name>
            </PlayerContainer>
        </>
    );
};
export default Player;
