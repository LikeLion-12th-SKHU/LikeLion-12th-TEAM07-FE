import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';
import backGround from '../assets/backImage.png';
import { PiWarningCircleFill } from 'react-icons/pi';
import blackboard from '../assets/blackboard.png';
export const PlayerList = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    column-gap: 30px;
    padding: 30px;
    margin-left: 3%;
    margin-top: 3%;
    margin-bottom: 5px;
    height: 60%;
    width: 88.5%;
    max-width: 88.5%;
    border-radius: 25px;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const NumberIcon1 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 98, 98),
        rgb(130, 49, 49)
    );
`;
export const Player01 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const NumberIcon2 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
`;
export const Player02 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const NumberIcon3 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 203, 20),
        rgb(196, 154, 3)
    );
`;
export const Player03 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const NumberIcon4 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(50, 182, 95),
        rgb(35, 131, 67)
    );
`;
export const Player04 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const NumberIcon5 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(49, 172, 241),
        rgb(12, 127, 193)
    );
`;
export const Player05 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const NumberIcon6 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(22, 115, 199),
        rgb(16, 93, 163)
    );
`;
export const Player06 = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 0;
`;
export const VotingButton = styled.button`
    width: 100%;
    height: 60px;
    margin-bottom: 0;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-image: ${(props) =>
        props.isClicked
            ? 'linear-gradient(to right bottom, rgb(169, 169, 169), rgb(105, 105, 105))'
            : 'linear-gradient(to right bottom, rgb(231, 148, 85), rgb(214, 106, 24))'};
    font-size: 20px;
    font-weight: bold;
    transition: background-image 0.3s ease;
    &:active {
        background-image: linear-gradient(
            to right bottom,
            rgb(169, 169, 169),
            rgb(105, 105, 105)
        );
    }
`;
export const PlayerName = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    padding: 0;
    .name {
        width: 200px;
        height: 60px;
        background-color: #dddddd;
        margin-top: 50px;
        margin-left: -10px;
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
        border-radius: 30px;
    }
`;

export const WarningIcons = styled(PiWarningCircleFill)`
    width: 40px;
    height: auto;
    color: #d42030;
    margin-right: 10px;
`;

export const subContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 40px;
`;

export const WarningText = styled.div`
    position: relative;
    bottom: -2px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .time {
        justify-content: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        font-size: 25px;
    }
    .timer {
        margin-left: 10px;
    }
    .Timer {
        margin-left: 10px;
    }
`;
export const After = styled.div`
    .AfterClick {
        width: 1014px;
        height: 484px;
        border-radius: 35px;
        background-color: #a7a7a7;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;

export const Warning = styled.div`
    padding-left: 0;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 94%;
    margin-top: 2%;
    margin-left: 2%;
    margin-bottom: 1%;
    height: 10%;
    background-color: none;
`;
export const WarningSecond = styled.div`
    padding-left: 0;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 94%;
    margin-bottom: 30px;
    margin-left: 2%;
    margin-top: 20px;
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

export const SuggestedWordCheck = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 3%;
    margin-top: 3%;
    height: 60%;
    width: 92%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-image: url(${blackboard});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top: 15px solid rgb(191, 97, 25);
    border-right: 15px solid rgb(191, 97, 25);
    border-left: 15px solid rgb(191, 97, 25);
    border-bottom: none;
`;
export const Timer = styled.div``;
export const Content1 = styled.div`
    align-items: end;

    font-size: 60px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    .content1 {
        font-size: 80px;
    }
    .content2 {
    }
`;
export const Content2 = styled.div`
    font-size: 60px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    .content1 {
        font-size: 40px;
        margin-right: -20px;
        color: #e45151;
    }
    .content2 {
        margin-left: 200px;
        color: rgb(255, 203, 20);
    }
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
    background-color: #f0f0f0;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
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
