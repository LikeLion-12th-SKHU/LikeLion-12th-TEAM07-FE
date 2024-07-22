import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginContainer = styled.div`
  background: rgba(255, 199, 134, 0.3);
  width: 400px; /* 원의 가로 크기 */
  height: 400px; /* 원의 세로 크기 */
  padding: 50px;
  border-radius: 50%; /* 원형으로 만들기 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  display: block;
  width: 270px;
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.kakao {
    background-color: #fee500;
  }

  &.google {
    background-color: #ffffff;
    color: black;
  }

  &.guest {
    background-color: #ccc;
  }
`;

export const Logo = styled.div`
  img {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 10px;
  }
`;
