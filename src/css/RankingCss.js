import styled from "styled-components";

// Styled Components 정의

export const MainContainer = styled.div`
  font-family: Arial, sans-serif; /* 기본 폰트 설정 */
  position: relative; /* 동그라미 배치 위해 position 설정 */
  overflow: hidden; /* 동그라미가 컨테이너를 벗어나지 않도록 설정 */
  width: 1280px; /* 너비 설정 */
  height: 832px; /* 높이 설정 */
  margin: 0 auto; /* 중앙 정렬 */
`;

export const LogoContainer = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 양 끝으로 정렬 */
  margin: 20px 40px; /* 마진 조정 */
`;

export const LogoImage = styled.img`
  width: 150px; /* 크기 조정 */
  height: auto;
`;

export const Header = styled.header`
  display: flex; /* Flexbox 레이아웃 사용 */
  justify-content: flex-end; /* 오른쪽 끝으로 정렬 */
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* 오른쪽 패딩을 조정 */
  box-sizing: border-box; /* 패딩을 포함한 전체 너비 설정 */
`;

export const NavLinks = styled.h5`
  color: #717171;
  margin-left: 10px; /* 각 링크 사이의 간격을 설정 */
  font-size: 14px; /* 폰트 사이즈 조정 */
  letter-spacing: 0.5px; /* 글자 사이의 간격을 설정 */
  cursor: pointer;
  text-transform: uppercase; /* 텍스트를 대문자로 변환 (옵션) */
  margin-bottom: 0px;
  display: inline-block; /* 인라인 블록으로 설정하여 가로로 나란히 배치 */

  /* 기본 링크 스타일 */
  &:first-child {
    margin-left: 0; /* 첫 번째 아이템은 왼쪽 마진을 제거 */
  }

  /* 호버 시 스타일 추가 */
  &:hover {
    color: #ffc786;
  }
`;

export const RankingSection = styled.div`
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto;
  padding: 20px;
`;

export const RankingTitleContainer = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 10px; /* 제목 아래 마진 설정 */
`;

export const RankingTitle = styled.h2`
  font-size: 20px; /* 폰트 사이즈 조정 */
  margin: 0; /* 기본 마진 제거 */
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #ffc786; /* 배경 색상 변경 */
  padding: 8px; /* 패딩 조정 */
  border-bottom: 1px solid #ddd;
  text-align: center; /* 가운데 정렬 */
`;

export const TableCell = styled.td`
  padding: 8px; /* 패딩 조정 */
  border-bottom: 1px solid #ddd;
  text-align: center; /* 가운데 정렬 */
`;

export const Button = styled.button`
  background-color: #ffa460;
  color: white;
  border: none;
  padding: 15px 20px; /* 패딩 조정 */
  cursor: pointer;
  border-radius: 25px;
  font-size: 20px; /* 폰트 사이즈 조정 */
  margin-left: auto; /* 왼쪽 여백을 자동으로 설정하여 오른쪽 정렬 */
  margin-right: 40px; /* 오른쪽 여백을 조정 */
  align-self: center; /* 자신을 가운데로 정렬 */
  font-weight: bold; /* 텍스트 두껍게 설정 */

  &:hover {
    background-color: #ff5c00;
  }
`;

export const Footer = styled.footer`
  text-align: left; /* 왼쪽 정렬 */
  margin-top: 20px;
  font-size: 12px; /* 폰트 사이즈 조정 */
  color: #666;
  background-color: #f4f4f4; /* 배경색 설정 */
  padding: 10px 40px; /* 상하 10px, 좌우 40px 여백 설정 */
  box-sizing: border-box; /* 패딩을 포함한 전체 너비 설정 */
  width: 100%;
  position: relative; /* 부모 요소의 위치를 기준으로 배치 */
  left: 0; /* 왼쪽 끝에 맞춤 */
  right: 0; /* 오른쪽 끝에 맞춤 */
`;

export const PaginationButton = styled.button`
  background-color: #ffa460;
  color: white;
  border: none;
  padding: 10px 20px; /* 패딩 조정 */
  cursor: pointer;
  border-radius: 25px;
  font-size: 16px; /* 폰트 사이즈 조정 */
  font-weight: bold; /* 텍스트 두껍게 설정 */
  margin-left: 10px; /* 버튼 사이 간격 조정 */

  &:hover {
    background-color: #ff5c00;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
