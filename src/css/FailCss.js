import styled from 'styled-components';

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
    width: 80%; /* 조정 가능한 값 */
    max-width: 1000px;
    background: white;
    position: relative;
    border-radius: 20px;
    padding-bottom: 20px;
`;
