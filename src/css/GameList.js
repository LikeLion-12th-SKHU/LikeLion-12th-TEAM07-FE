import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    margin: 2% 2% 0 2%;
    max-height: 720px;
    overflow-y: auto; /* 수직 스크롤 가능 */
    overflow-x: hidden; /* 수평 스크롤 숨기기 */
`;

export const ContainerButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    cursor: pointer; /* 버튼 클릭 시 커서 변경 */

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const Name = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
    background-color: #fffff; /* 배경색 지정 */
    padding: 10px 0; /* 상하 패딩 추가 */
    border-top-left-radius: 20px; /* 왼쪽 상단 테두리 둥글게 */
    border-top-right-radius: 20px; /* 오른쪽 상단 테두리 둥글게 */
`;

export const PlayCount = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #555555;
    padding: 10px 0; /* 상하 패딩 추가 */
    border-bottom-left-radius: 20px; /* 왼쪽 하단 테두리 둥글게 */
    border-bottom-right-radius: 20px; /* 오른쪽 하단 테두리 둥글게 */
`;
