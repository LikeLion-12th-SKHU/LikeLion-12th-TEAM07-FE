import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

export const CloseButton = styled(IoMdCloseCircle)`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #000000;
    border: none;
    border-radius: 30px;
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(0.95);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

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
    flex-direction: column;
    justify-content: center;

    width: 860px;
    max-width: 860px;
    height: 480px;
    background: #dddddd;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 0;
    gap: 40px;
    position: relative;
`;
export const WordTopic = styled.div`
    display: flex;
    flex-direction: row;
    width: 820px;
    height: 90px;
    font-size: 30px;
    font-weight: bold;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    justify-content: left;
    padding-left: 40px;
    align-items: center;
    background-image: linear-gradient(
        to right bottom,
        rgb(212, 212, 212),
        rgb(181, 181, 181)
    );
    position: absolute;
    top: 0;
    .topic {
        padding: 10px;
        color: #2da756;
    }
`;
export const Description = styled.div``;
