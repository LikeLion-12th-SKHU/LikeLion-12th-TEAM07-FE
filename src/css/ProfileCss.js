import styled from 'styled-components';
import { IoPersonSharp } from 'react-icons/io5';

export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left; /* 중앙 정렬 추가 */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 25px;
    width: 180px;

    height: 140px;
    background-color: #ffffff;
`;
export const Icons = styled(IoPersonSharp)`
    width: 80px;
    height: 80px;
    margin-top: 20px;
    margin-left: 10px;
`;

export const ProfileName = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: -5.5px;
    padding: 0px;
`;
export const Content1 = styled.div`
    font-size: 25px;
`;
export const Content2 = styled.div`
    margin-top: 6.5px;
    font-size: 17px;
`;
export const LoginButton = styled.button`
    border: none;
    cursor: pointer;
    margin-top: 6.5px;
    background-color: #ffffff;
    margin-left: 30px;
    font-size: 13px;

    &:hover {
        background-color: #e0e0e0;
    }
`;
export const Content3 = styled.div`
    margin-top: 1px;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Ranking = styled.div``;
export const Score = styled.div``;
export const InfoContainer = styled.div`
    margin-left: 0px;
`;
