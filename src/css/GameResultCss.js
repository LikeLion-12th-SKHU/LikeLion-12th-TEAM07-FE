import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 860px;
    max-width: 860px;
    height: 480px;
    background: #dddddd;
    border-radius: 30px;
    padding: 0;
    gap: 40px;
    position: relative;
`;

export const Before = styled.div`
    width: 300px;
    height: 390px;
    border-radius: 30px;
    background-color: #f0f0f0;
`;

export const After = styled.div`
    width: 300px;
    height: 390px;
    border-radius: 30px;
    background-color: #f0f0f0;
`;

export const Arrow = styled.div`
    .VictoryArrow {
        width: 80px;
        margin: 0;
    }
`;

export const UserName = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    font-weight: bold;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const CloseModal = styled.button`
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 160px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 98, 98),
        rgb(130, 49, 49)
    );
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;
