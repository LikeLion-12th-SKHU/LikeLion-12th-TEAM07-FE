import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
  width: 1280px;
  height: 832px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const NavLinks = styled.h5`
  color: #717171;
  margin-left: 10px;
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 0px;
  display: inline-block;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #ffc786;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

export const QuizTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.th`
  background-color: #ffc786;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 0 16px;
`;

export const CategoryContainer = styled.div`
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const WordList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const WordItem = styled.li`
  margin-bottom: 5px;
`;

export const WordDescription = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Footer = styled.footer`
  text-align: left;
  margin-top: 20px;
  font-size: 12px;
  color: #666;
  background-color: #f4f4f4;
  padding: 10px 40px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BackButton = styled.button`
  background-color: #ffc786;
  color: #333;
  border: none;
  padding: 10px 20px; /* 패딩 조정 */
  cursor: pointer;
  border-radius: 25px; /* 둥근 모서리 설정 */
  margin-left: auto; /* 제목 오른쪽에 위치하도록 설정 */
  font-size: 16px; /* 폰트 사이즈 조정 */
  margin-bottom: 10px;

  &:hover {
    background-color: #ff8c00;
  }
`;
