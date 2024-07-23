import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    Footer,
    PaginationButton,
    RankingTitleContainer,
} from '../css/RankingCss'; // 기존의 CSS 그대로 사용

const allRankings = [
    { rank: 1, nickname: 'giwoong', score: 265, games: 265 },
    { rank: 2, nickname: 'mubin', score: 263, games: 263 },
    { rank: 3, nickname: 'yurim', score: 261, games: 261 },
    { rank: 4, nickname: 'seoyun', score: 259, games: 259 },
    { rank: 5, nickname: 'likelion', score: 230, games: 230 },
    { rank: 6, nickname: 'hannah', score: 225, games: 225 },
    { rank: 7, nickname: 'seungmin', score: 220, games: 220 },
    { rank: 8, nickname: 'yuri', score: 215, games: 215 },
    { rank: 9, nickname: 'kyle', score: 210, games: 210 },
    { rank: 10, nickname: 'jenna', score: 205, games: 205 },
    { rank: 11, nickname: 'david', score: 200, games: 200 },
    { rank: 12, nickname: 'sophia', score: 195, games: 195 },
    { rank: 13, nickname: 'oliver', score: 190, games: 190 },
    { rank: 14, nickname: 'amelia', score: 185, games: 185 },
    { rank: 15, nickname: 'noah', score: 180, games: 180 },
    { rank: 16, nickname: 'ava', score: 175, games: 175 },
    { rank: 17, nickname: 'liam', score: 170, games: 170 },
    { rank: 18, nickname: 'isabella', score: 165, games: 165 },
    { rank: 19, nickname: 'jacob', score: 160, games: 160 },
    { rank: 20, nickname: 'mia', score: 155, games: 155 },
];

const ITEMS_PER_PAGE = 10;

const RankingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const totalPages = Math.ceil(allRankings.length / ITEMS_PER_PAGE);
    const rankings = allRankings.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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

    return (
        <MainContainer>
            <LogoContainer>
                <LogoImage
                    alt="LikeLiarimage"
                    src="img/LikeLiarnn.png"
                    onClick={() => navigate('/')}
                />
                <Header>
                    <h1>
                        <NavLinks onClick={() => navigate('/login')}>
                            회원가입
                        </NavLinks>
                        <NavLinks onClick={() => navigate('/login')}>
                            로그인
                        </NavLinks>
                        <NavLinks onClick={() => navigate('/ranking')}>
                            랭킹
                        </NavLinks>
                    </h1>
                </Header>
            </LogoContainer>
            <RankingSection>
                <RankingTitleContainer>
                    <RankingTitle>랭킹</RankingTitle>
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
                <div>
                    <PaginationButton onClick={handlePreviousPage}>
                        이전
                    </PaginationButton>
                    <PaginationButton onClick={handleNextPage}>
                        다음
                    </PaginationButton>
                </div>
            </RankingSection>
            <Footer>
                <p>성공회대 7팀</p>
                <p>비즈니스 문의 yurim0725@naver.com</p>
            </Footer>
        </MainContainer>
    );
};

export default RankingPage;
