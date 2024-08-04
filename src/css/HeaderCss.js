import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 양 끝으로 정렬 */
  margin: 20px 40px; /* 마진 조정 */
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 150px; /* 크기 조정 */
  height: auto;
`;

export const Headers = styled.header`
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
