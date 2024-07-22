import styled from 'styled-components';
export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: row;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 25px;
    width: 161px;
    height: 94px;
    background-color: #ffffff;
`;

export const ProfilePicture = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
`;
export const ProfileName = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
