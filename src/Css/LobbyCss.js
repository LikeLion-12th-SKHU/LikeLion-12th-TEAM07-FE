import { styled, createGlobalStyle } from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

export const BackGroundColor = createGlobalStyle`
    body {
        background-color: #d5d5d5;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export const Container = styled.div`
    margin: 50px auto 0;
    width: 1083px;
    height: 716px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 40px;
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
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 181px;
    height: 646px;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 40px;
`;
export const ProfileBack = styled.div`
    background-image: linear-gradient(
        to right bottom,
        rgb(227, 151, 36),
        rgb(224, 130, 42)
    );
    width: 100%;
    height: 114px;
    border-bottom-left-radius: 30px;
    display: flex;
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
    height: 50px;
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
    height: 50px;
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
    height: 50px;
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
    height: 50px;
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
    height: 50px;
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
    background-color: none;
    margin-top: 237px;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    font-size: 25px;
`;
