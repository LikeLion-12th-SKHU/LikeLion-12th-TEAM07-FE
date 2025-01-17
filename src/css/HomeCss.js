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

export const Circle = styled.div`
  width: 200px; /* 크기 조정 */
  height: 200px; /* 크기 조정 */
  background-color: rgba(255, 199, 134, 0.3); /* #FFC786 색상, 투명도 30% */
  border-radius: 50%;
  position: absolute;
  z-index: -1; /* 다른 요소 뒤에 위치하도록 설정 */
  filter: blur(20px); /* 블러 효과 추가 */
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

export const LogoContainer2 = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  margin: 20px 40px; /* 위, 아래, 좌우 마진 설정 */
  padding: 20px; /* 패딩 설정 */
  justify-content: space-between; /* 아이템을 양 끝으로 정렬 */
`;

export const LogoImage2 = styled.img`
  width: 120px; /* 이미지 너비 설정 */
  height: auto;
  margin-right: 10px; /* 이미지와 텍스트 사이의 간격 설정 */
`;

export const Description = styled.p`
  font-size: 24px; /* 텍스트 크기 조정 */
  color: #ffa460; /* 텍스트 색상 설정 */
  margin: 0; /* 기본 마진 제거 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

export const RankingImage = styled.img`
  max-width: 30px; /* 이미지 너비 설정 */
  height: auto;
  margin-left: 10px; /* 제목과 이미지 사이의 간격 설정 */
  cursor: pointer;
`;
