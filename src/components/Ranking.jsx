import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EffectSound from "./EffectSound";

import {
  MainContainer,
  RankingSection,
  RankingTitle,
  RankingTable,
  TableHeader,
  TableCell,
  Footer,
  PaginationButton,
  RankingTitleContainer,
  BackButton, // 새로운 스타일 추가
} from "../css/RankingCss"; // 기존의 CSS 그대로 사용
import Header from "./Header";
import axiosInstance from "../utils/apiConfig";

const ITEMS_PER_PAGE = 10;

const RankingPage = ({ setBackgroundMusic }) => {
  const effectSound = useRef(null);

  const [rankingsMember, setRankingsMember] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setBackgroundMusic(false);
    return () => setBackgroundMusic(true);
  }, [setBackgroundMusic]);

  const totalPages = Math.ceil(rankingsMember.length / ITEMS_PER_PAGE);
  const rankings = rankingsMember.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    getRankings();
  }, []);

  const getRankings = async () => {
    try {
      const rankingsResponse = await axiosInstance.get(`/members/ranking`);
      const rankingData = rankingsResponse.data.data.memberInfoResDtos.map(
        (member) => ({
          gameRounds: member.gameRounds,
          name: member.name,
          picture: member.picture,
          score: member.score,
        })
      );

      setRankingsMember(rankingData);
    } catch (error) {
      console.error("랭킹 목록을 가져오는데 실패했습니다.", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const previousPageClick = () => {
    effectSound.current.playSound();
    setTimeout(() => {
      navigate(-1);
    }, 140);
  };
  return (
    <>
      <MainContainer>
        <Header />
        <RankingSection>
          <RankingTitleContainer>
            <RankingTitle>랭킹</RankingTitle>
            <BackButton onClick={previousPageClick}>이전 페이지</BackButton>
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
              {rankings.map((member, index) => (
                <tr key={index + 1}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.score}점</TableCell>
                  <TableCell>{member.gameRounds}</TableCell>
                </tr>
              ))}
            </tbody>
          </RankingTable>
          <div>
            <PaginationButton onClick={handlePreviousPage}>
              이전
            </PaginationButton>
            <PaginationButton onClick={handleNextPage}>다음</PaginationButton>
          </div>
        </RankingSection>
        <Footer>
          <p>성공회대 7팀</p>
          <p>비즈니스 문의 yurim0725@naver.com</p>
        </Footer>
      </MainContainer>
      <EffectSound ref={effectSound} />
    </>
  );
};

export default RankingPage;
