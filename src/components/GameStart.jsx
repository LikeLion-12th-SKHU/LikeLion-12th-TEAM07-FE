import React, { useRef } from 'react';
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import {
    Container,
    Header,
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    DetailCategory,
    Element1,
    Element2,
    Element3,
    GameRuleWindow,
    Element4,
    Element5,
    Element6,
    Screen,
    SuggestedWord,
} from '../css/GameStartCss.js';

const GameStart = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = React.useState(false);
    const effectSound = useRef(null);

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    return (
        <>
            <Container>
                <Header>
                    <LogoButton>LIke Liar</LogoButton>
                </Header>
                <LobbyBody>
                    <Category>
                        <ProfileBack></ProfileBack>
                        <DetailCategory>
                            <Element1>ex) 멤버1</Element1>
                            <Element2>ex) 멤버2</Element2>
                            <Element3>ex) 멤버3</Element3>
                            <Element4>ex) 멤버4</Element4>
                            <Element5>ex) 멤버5</Element5>
                            <Element6>ex) 멤버6</Element6>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <Screen>
                        <SuggestedWord></SuggestedWord>
                    </Screen>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default GameStart;
