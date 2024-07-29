import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    /* background-color: #f0f0f0; */
    margin: 2% 2% 0 2%;
    max-height: 720px;
    overflow-y: auto; /* 수직 스크롤 가능 */
    overflow-x: hidden; /* 수평 스크롤 숨기기 */
`;
export const Logo = styled.div`
    .logo {
        width: 35px;
        height: auto;
    }
    margin-right: 15px;
    margin-left: 6px;
`;
export const ContainerButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 0;
    height: 150px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    transition: background-color 0.3s ease, box-shadow 0.3s ease,
        transform 0.2s ease;
    cursor: pointer; /* 버튼 클릭 시 커서 변경 */

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* 마우스 올릴 때 그림자 커지기 */
    }

    &:active {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8); /* 클릭 시 그림자 더 커지기 */
    }
`;
export const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #e0e0e0;
`;
export const NameContainer = styled.div`
    margin-top: -54px;
    display: flex;
    padding: 0px;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 50px;

    color: #000000;
    margin-bottom: 10px;
    background-color: #010101;
    border-top-left-radius: 20px; /* 왼쪽 상단 테두리 둥글게 */
    border-top-right-radius: 20px; /* 오른쪽 상단 테두리 둥글게 */
`;

export const PlayerCount = styled.div`
    width: 100%;
    text-align: left;
    margin-left: 40px;
    font-size: 25px;
    color: #555555;
    font-weight: bold;

    padding: 10px 0; /* 상하 패딩 추가 */
    border-bottom-left-radius: 20px; /* 왼쪽 하단 테두리 둥글게 */
    border-bottom-right-radius: 20px; /* 오른쪽 하단 테두리 둥글게 */
`;
