import { styled } from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

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

export const MiniTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-weight: bold;
    font-size: 30px;
    padding-left: 20px;

    background-color: #cccccc;
    height: 50px;
`;
export const Des = styled.div`
    display: flex;
    justify-content: left;
    padding: 20px;
    align-items: center;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 936px;
    position: relative;
    top: -10px; /* 요소를 위로 이동 */
    border-radius: 40px;
    background-color: #e7e7e7;
`;
export const Button = styled.div`
    display: flex;
    margin: 30px;
    height: 100px;
    width: 400px;

    flex-direction: row;
`;
export const ReadyButton = styled.button`
    cursor: pointer;
    width: 180px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    background-color: #ff7710;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

    &:active {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        transform: translateY(2px);
    }
`;
export const StartButton = styled.button`
    cursor: pointer;
    margin-left: 40px;
    width: 180px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    font-size: 30px;
    background-color: #39a0cc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

    &:active {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(2px);
    }
`;
export const User = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 30px;
    height: 350px;
    width: 100%;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
`;
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 2% 0 2%;
    width: 1026px;

    height: 770px;
    justify-content: center;
    align-items: center;
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

export const DetailCategory = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ElementL = styled.button`
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    height: 60px;
    cursor: pointer;
    border: none;
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

    &:hover {
        background-color: #e0e0e0;
        transform: scaleX(0.9); // 마우스를 올렸을 때 줄어드는 효과
    }

    &:active {
        transform: scaleX(0.8); // 클릭 시 더 줄어드는 효과
    }
`;
export const ElementR = styled.button`
    font-weight: bold;

    font-size: 20px;
    width: 100%;
    height: 60px;
    cursor: pointer;
    border: none;
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

    &:hover {
        background-color: #e0e0e0;
        transform: scaleX(0.9); // 마우스를 올렸을 때 줄어드는 효과
    }

    &:active {
        transform: scaleX(0.8); // 클릭 시 더 줄어드는 효과
    }
`;
export const ElementH = styled.button`
    font-weight: bold;

    font-size: 20px;
    width: 100%;
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

    &:hover {
        background-color: #e0e0e0;
        transform: scaleX(0.9);
    }

    &:active {
        transform: scaleX(0.8);
    }
`;
export const ElementS = styled.button`
    font-weight: bold;

    font-size: 20px;
    width: 100%;
    height: 60px;
    cursor: pointer;
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

    &:hover {
        background-color: #e0e0e0;
        transform: scaleX(0.9); // 마우스를 올렸을 때 줄어드는 효과
    }

    &:active {
        transform: scaleX(0.8); // 클릭 시 더 줄어드는 효과
    }
`;
export const ElementRank = styled.button`
    font-weight: bold;

    font-size: 20px;
    width: 100%;

    height: 60px;
    cursor: pointer;
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

    &:hover {
        background-color: #e0e0e0;
        transform: scaleX(0.9); // 마우스를 올렸을 때 줄어드는 효과
    }
    &:active {
        transform: scaleX(0.8); // 클릭 시 더 줄어드는 효과
    }
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
