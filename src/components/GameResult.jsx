import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ModalBackground,
    ModalContent,
    Before,
    After,
    Arrow,
    UserName,
    CloseModal,
} from '../css/GameResultCss.js';
import vic from '../assets/victory.png';
import fail from '../assets/Fail.png';
import VictoryArrow from '../assets/VictoryArrow.png';

const GameResult = ({ onClose, result, roomData }) => {
    const navigate = useNavigate();

    const ClickClose = () => {
        navigate('/lobby');
    };
    console.log(roomData.shuffledPlayers.name);

    return (
        <ModalBackground>
            <img
                src={result === '라이어' ? vic : fail}
                alt={result === '라이어' ? 'Victory' : 'Fail'}
            />
            <ModalContent>
                <Before>
                    <UserName>플레이어 정보</UserName>
                    {/* 플레이어의 이름, 점수, 랭킹 등이 필요 */}
                </Before>
                <Arrow>
                    <img
                        src={VictoryArrow}
                        alt="vic"
                        className="VictoryArrow"
                    />
                </Arrow>
                <After>
                    <UserName>플레이어 정보</UserName>
                    {/* 플레이어의 이름, 점수, 랭킹 등이 필요 */}
                </After>
            </ModalContent>
            <CloseModal
                onClick={() => {
                    onClose();
                    ClickClose();
                }}
            >
                나가기
            </CloseModal>
        </ModalBackground>
    );
};

export default GameResult;
