import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';
import backGround from '../assets/backImage.png';
import { PiWarningCircleFill } from 'react-icons/pi';

export const WarningIcons = styled(PiWarningCircleFill)`
    width: 40px;
    height: auto;
    color: #d42030;
    margin-right: 10px;
`;
export const Num = styled.div`
    font-size: 50px;
    margin-left: 20px;
    font-weight: bold;
`;
export const Topic = styled.div`
    font-size: 50px;
    margin-right: 120px;
    margin-left: 100px;
    font-weight: bold;
`;
export const Sub = styled.div`
    display: flex;
    width: 80%;
    height: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
`;

export const subContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 40px;
`;

export const SubStance = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;

    width: 94%;
    height: 66%;
    background-color: #dddddd;
    margin-left: 3%;
    .subBody1 {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        margin-left: 40px;
        position: relative;
        left: -380px;
        margin-right: 10px;
    }
    .subBody2 {
        font-size: 30px;
        font-weight: bold;
        color: #2da756;
    }
    .subBody3 {
        position: relative;
        bottom: -8px;
        font-weight: bold;

        font-size: 20px;
    }
    .subBody4 {
        font-weight: bold;
    }
`;
export const WarningText = styled.div`
    font-size: 25px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding: 0;
    .counter {
        margin-right: 8px;
    }
`;
export const After = styled.div`
    .AfterClick {
        width: 1005px;
        height: 480px;
        border-radius: 35px;
        background-color: #a7a7a7;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;
export const AfterClickContents = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    border-radius: 35px;
`;
export const TopicAndNum = styled.div`
    margin-top: 15px;
    width: 94%;
    margin-left: 3%;
    height: 20%;
    /* background-color: #ffffff; */
    display: flex;
    justify-content: left;
    align-items: center;
    .image {
        width: 55px;
        margin-right: -90px;
        margin-left: 10px;
    }
`;

export const Warning = styled.div`
    padding-left: 0;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 94%;
    margin-left: 3%;
    margin-top: 2%;
    height: 10%;
    background-color: none;
`;

export const Element1 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 98, 98),
        rgb(130, 49, 49)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element2 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element3 = styled.div`
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 30%;
    height: 60px;
    cursor: pointer;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 203, 20),
        rgb(196, 154, 3)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element4 = styled.div`
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(50, 182, 95),
        rgb(35, 131, 67)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element5 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    background-image: linear-gradient(
        to right bottom,
        rgb(49, 172, 241),
        rgb(12, 127, 193)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const PlayerId = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
`;
export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backGround});
    width: 1100px;
    height: 802px;
    padding: 0;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: -55px;
    font-size: 20px;
    width: 50%;
    height: 100%;
    font-size: 50px;
    font-weight: bold;
`;
export const Ele = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;

    background-color: #dddddd;
    padding: 0;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
export const Title = styled.div`
    display: flex;
    padding-left: 15px;
    width: 17%;
    position: relative;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    height: 100%;
    font-size: 50px;
    font-weight: bold;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
    box-shadow: 6px 0px 2px rgba(0, 0, 0, 0.3);
`;
export const SuggestedWord = styled.div`
    padding-left: 0;
    display: flex;
    flex-direction: row;

    width: 94%;

    margin-left: 3%;
    margin-top: 3%;
    height: 14%;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const CheckTopicButton = styled.div`
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 300px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    font-size: 40px;
    background-image: linear-gradient(
        to right bottom,
        rgb(50, 182, 95),
        rgb(43, 158, 81)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

    &:active {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(2px);
    }
`;

export const SuggestedWordCheck = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    margin-left: 3%;
    margin-top: 3%;
    height: 60%;
    width: 93%;
    border-radius: 40px;
    background-color: #e0e0e0;

    border: 7px solid black; /* 두께, 스타일, 색상 */
`;

export const Element6 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 60px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(22, 115, 199),
        rgb(16, 93, 163)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;

export const GameRuleWindow = styled(FaQuestionCircle)`
    position: absolute; // 추가
    bottom: 20px; // 추가
    left: 20px; // 추가
    left: 20px;
    background-color: none;
    margin-top: 337px;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    font-size: 25px;
    background-color: transparent;
    border: none;
`;
export const DetailCategory = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Category = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 200px;
    height: 802px;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 40px;
    & > * {
        margin: 0;
    }
`;
export const LogoButton = styled.button`
    font-style: italic;
    font-weight: bold;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 35px;
    cursor: pointer;
    padding: 0;
    margin: 0;
`;
export const ProfileBack = styled.div`
    background-image: linear-gradient(
        to right bottom,
        rgb(227, 151, 36),
        rgb(224, 130, 42)
    );
    width: 100%;
    height: 160px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1280px;
    height: 832px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 40px;
    margin: 0 auto;
    padding: 20px;
`;

export const Header = styled.div`
   padding: 20px;
    align-items: center;
    display: flex;
    justify-content: left;
    font-size: 35px
    width: 100%;
    height: 30px;
    background-color: #000000;
`;
export const LobbyBody = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;
