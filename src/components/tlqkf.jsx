import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../css/HomeCss";

const rankings = [
  { rank: 1, nickname: "giwoong", score: 265, games: 265 },
  { rank: 2, nickname: "mubin", score: 263, games: 263 },
  { rank: 3, nickname: "yurim", score: 261, games: 261 },
  { rank: 4, nickname: "seoyun", score: 259, games: 259 },
  { rank: 5, nickname: "likelion", score: 230, games: 230 },
];

const RankingBoard = () => {
  return (
    <div className="ranking-board">
      <header className="header">
        <h1 className="logo">
          Like<span className="highlight">Liar</span>
        </h1>
        <p className="description">
          건강한 퀴즈 게임, 친구들과 함께 재미있게 배우세요!
        </p>
        <img src="LikeLiarNOBACKG.png" alt="noimage"></img>
      </header>
      <div className="ranking-section">
        <h2 className="ranking-title">랭킹</h2>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>순위</th>
              <th>닉네임</th>
              <th>점수</th>
              <th>게임수</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user) => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.nickname}</td>
                <td>{user.score}점</td>
                <td>{user.games}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="liar-button">라이어 찾으러 가기</button>
      <footer className="footer">
        <p>성공회대 7팀</p>
        <p>비즈니스 문의 yurim0725@naver.com</p>
      </footer>
    </div>
  );
};

export default Home;
