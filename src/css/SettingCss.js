import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 60%;
    background: white;
    position: relative;
    border-radius: 20px;
`;

export const StyleFont = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    background-image: linear-gradient(
        to right bottom,
        rgb(179, 179, 179),
        rgb(140, 140, 140)
    );
    color: #030303;
    font-size: 40px;
    font-weight: bold;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-bottom: 20px;
    svg {
        margin-right: 10px;
    }
`;

export const CloseButton = styled(IoMdCloseCircle)`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #000000;
    border: none;
    border-radius: 30px;
    font-size: 30px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(0.95);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const SoundSetting = styled.div`
    margin: 20px;
`;
