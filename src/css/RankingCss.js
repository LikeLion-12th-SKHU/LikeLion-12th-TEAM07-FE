import styled from "styled-components";

// Styled Components 정의

export const MainContainer = styled.div`
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
  width: 1280px;
  height: 832px;
  margin: 0 auto;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 199, 134, 0.3);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(20px);
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

export const RankingSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const RankingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 제목과 버튼 사이의 간격 설정 */
  margin-bottom: 10px;
`;

export const RankingTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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

export const PaginationButton = styled.button`
  background-color: #ffa460;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  font-size: 16px;
  margin: 10px;
  font-weight: bold;

  &:hover {
    background-color: #ff5c00;
  }
`;

export const BackButton = styled(PaginationButton)`
  margin-left: auto; /* 왼쪽 여백을 자동으로 설정하여 오른쪽 정렬 */
  margin-right: 0;
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
  position: relative;
  left: 0;
  right: 0;
`;

export const LogoContainer2 = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 40px;
  padding: 20px;
  justify-content: space-between;
`;

export const LogoImage2 = styled.img`
  width: 120px;
  height: auto;
  margin-right: 10px;
`;

export const Description = styled.p`
  font-size: 24px;
  color: #ffa460;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

export const RankingImage = styled.img`
  max-width: 30px;
  height: auto;
  margin-left: 10px;
`;
