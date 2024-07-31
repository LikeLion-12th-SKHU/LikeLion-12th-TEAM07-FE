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
const Victory = ({ onClose }) => {
    const navigate = useNavigate();
    const ClickClose = () => {
        navigate('/lobby');
    };
    return (
        <ModalBackground>
            {/* 패배시 Fail 이미지 불러오는 ... */}
            {/* <img src={fail} alt="Fail" /> */}
            <img src={vic} alt="victory" />
            <ModalContent>
                <Before>
                    <UserName>플레이어 아이디</UserName>
                </Before>
                <Arrow>
                    <img
                        src={VictoryArrow}
                        alt="vic"
                        className="VictoryArrow"
                    />
                </Arrow>
                <After>
                    <UserName>플레이어 아이디</UserName>
                </After>
            </ModalContent>
            <CloseModal onClick={(onClose, ClickClose)}>나가기</CloseModal>
        </ModalBackground>
    );
};

export default Victory;
