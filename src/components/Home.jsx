import React from "react";
import {
  MainContainer,
  LogoContainer,
  LogoImage,
  Header,
  NavLinks,
  RankingSection,
  RankingTitle,
  RankingTable,
  TableHeader,
  TableCell,
  Button,
  Footer,
  LogoContainer2,
  LogoImage2,
  Description,
  Circle,
  RankingImage,
  RankingTitleContainer, // 추가된 컨테이너
} from "../css/HomeCss"; // 스타일 정의 파일 import

const rankings = [
  { rank: 1, nickname: "giwoong", score: 265, games: 265 },
  { rank: 2, nickname: "mubin", score: 263, games: 263 },
  { rank: 3, nickname: "yurim", score: 261, games: 261 },
  { rank: 4, nickname: "seoyun", score: 259, games: 259 },
  { rank: 5, nickname: "likelion", score: 230, games: 230 },
];

const RankingBoard = () => {
  return (
    <MainContainer>
      <Circle style={{ top: "50px", left: "20px" }} />
      <Circle style={{ top: "200px", right: "20px" }} />
      <Circle style={{ bottom: "150px", left: "200px" }} />

      <LogoContainer>
        <LogoImage alt="LikeLiarimage" src="img/LikeLiarnn.png" />
        <Header>
          <h1>
            <NavLinks>회원가입</NavLinks>
            <NavLinks>로그인</NavLinks>
            <NavLinks>랭킹</NavLinks>
          </h1>
        </Header>
      </LogoContainer>
      <LogoContainer2>
        <LogoImage2 alt="lensimage" src="img/lens.png" />
        <Description>
          건강한 퀴즈 게임,
          <br />
          친구들과 함께 재밌게 배우세요!
        </Description>
        <Button>라이어 찾으러 가기</Button>
      </LogoContainer2>
      <RankingSection>
        <RankingTitleContainer>
          <RankingTitle>랭킹</RankingTitle>
          <RankingImage alt="RankingImage" src="img/Vector.png" />
        </RankingTitleContainer>
        <RankingTable>
          <thead>
            <tr>
              <TableHeader>순위</TableHeader>
              <TableHeader>닉네임</TableHeader>
              <TableHeader>점수</TableHeader>
              <TableHeader>게임수</TableHeader>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user) => (
              <tr key={user.rank}>
                <TableCell>{user.rank}</TableCell>
                <TableCell>{user.nickname}</TableCell>
                <TableCell>{user.score}점</TableCell>
                <TableCell>{user.games}</TableCell>
              </tr>
            ))}
          </tbody>
        </RankingTable>
      </RankingSection>

      <Footer>
        <p>성공회대 7팀</p>
        <p>비즈니스 문의 yurim0725@naver.com</p>
      </Footer>
    </MainContainer>
  );
};

export default RankingBoard;
