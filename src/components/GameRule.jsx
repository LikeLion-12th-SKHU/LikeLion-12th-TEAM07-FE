import React from 'react';
import { IoGameController } from 'react-icons/io5';
import {
    ModalBackground,
    ModalContent,
    CloseButton,
    StyleFont,
    Subheading,
    Content,
} from '../css/GameRuleCss.js';

const GameRule = ({ onClose }) => {
    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton size="" color="#ff0000" onClick={onClose} />
                <StyleFont>
                    <IoGameController />
                    게임 방법
                </StyleFont>

                <Subheading>[ 게임 진행 ]</Subheading>

                <Content>1. 건강에 대한 주제로 제시어를 줍니다.</Content>
                <Content>2. 각각 제시어를 확인하고 순서를 확인합니다.</Content>
                <Content>
                    3. 제시어에 대한 간단한 설명을 볼 수 있습니다.
                </Content>
                <Content>
                    4. 시민과 라이어 두 직업으로 나뉘어 게임이 진행됩니다.
                </Content>
                <Content>
                    5. 모두가 제시어에 대한 설명을 순서에 따라 한 번씩
                    설명합니다.
                </Content>
                <Content>
                    6. 토론 시간을 가지게 되고 토론 시간이 끝나면 투표를 합니다.
                </Content>
                <Content>
                    7. 제일 많이 득표를 한 플레이어가 게임에서 제외됩니다
                </Content>
                <Content>
                    ( 라이어 : 게임 종료 , 시민 : 다음 라운드 진행 )
                </Content>
                <Content>
                    8. 라이어와 시민이 한 명씩 살아남는 경우에 라이어가 제시어를
                    맞추면 라이어 승리 제시어가 틀리다면 시민 승리입니다.
                </Content>

                <Subheading>[ 라이어 ]</Subheading>

                <Content>
                    시민을 말에 집중하여 제시어를 아는 척 해야해요!!
                </Content>

                <Subheading>[ 시민 ]</Subheading>

                <Content>
                    제시어를 모르면서 아는 척 하는 거짓말쟁이를 찾으세요!!
                </Content>

                <Subheading>[ 점수 ]</Subheading>

                <Content>라이어 승리 : +30 점 , 시민 -25점</Content>
                <Content>
                    라이어 패배 : 첫 라운드 광탈 -20 점 그 후 탈락 -10 점
                </Content>
                <Content>시민 승리 : 생존 -> +20점</Content>
                <Content>시민 승리 : 생존 x -> +10점</Content>
            </ModalContent>
        </ModalBackground>
    );
};

export default GameRule;
