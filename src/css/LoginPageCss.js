import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    height: 70vh;
    align-items: flex-end;
    position: relative;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
    display: flex;
    background: rgba(255, 199, 134, 0.3);
    width: 450px;
    height: 450px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.5vw;
    animation: ${slideUp} 2s ease-out forwards;
`;

export const LogoImage = styled.img`
    width: 120px;
    height: 120px;
`;

export const LikeLiarImage = styled.img`
    width: 250px;
    height: 100px;
`;

export const LoginButton = styled.img`
    width: 45%;
    cursor: pointer;
`;
