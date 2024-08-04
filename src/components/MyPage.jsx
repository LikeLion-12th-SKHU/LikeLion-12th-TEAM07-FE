import React, { useEffect } from "react";
import {
  MainContainer,
  Footer,
  SectionTitle,
  QuizTable,
  TableHeader,
  TableCell,
  CategoryContainer,
  CategoryTitle,
  WordList,
  WordItem,
  WordDescription,
  ScrollContainer,
} from "../css/MyPageCss";
import Header from "./Header";

const quizHistory = [
  {
    roomName: "Mark",
    result: "승리",
    score: 150,
    rank: 1,
    date: "2023-07-01",
    time: "14:30",
  },
  {
    roomName: "Alice",
    result: "패배",
    score: 100,
    rank: 3,
    date: "2023-07-02",
    time: "16:00",
  },
  // 추가적인 퀴즈 기록을 여기에 추가하세요
];

const categories = [
  {
    name: "신체 건강",
    words: [
      {
        word: "운동",
        description: "신체 활동을 통해 건강을 증진시키는 활동.",
      },
      {
        word: "영양",
        description: "신체가 필요로 하는 필수 영양소를 섭취하는 것.",
      },
      {
        word: "다이어트",
        description: "체중 조절을 위한 식사 및 운동 계획.",
      },
      { word: "수분 섭취", description: "충분한 물을 마시는 것." },
      {
        word: "체력",
        description: "신체가 일정한 활동을 지속할 수 있는 능력.",
      },
      { word: "유연성", description: "근육과 관절의 움직임 범위." },
      { word: "근력", description: "근육이 힘을 발휘하는 능력." },
      {
        word: "심폐 지구력",
        description: "심장과 폐의 건강을 유지하는 능력.",
      },
      {
        word: "대사",
        description: "신체가 에너지를 생성하고 사용하는 과정.",
      },
      { word: "근육", description: "신체 운동을 가능하게 하는 조직." },
    ],
  },
  {
    name: "정신 건강",
    words: [
      {
        word: "스트레스 관리",
        description: "스트레스를 효과적으로 다루는 방법.",
      },
      { word: "명상", description: "마음을 차분하게 하는 정신적 연습." },
      { word: "요가", description: "신체와 마음을 조화시키는 운동." },
      { word: "상담", description: "정신 건강 전문가와의 대화." },
      {
        word: "감정 조절",
        description: "감정을 효과적으로 통제하는 능력.",
      },
      {
        word: "우울증",
        description: "심한 슬픔과 흥미 상실을 특징으로 하는 정신 질환.",
      },
      { word: "불안", description: "과도한 걱정과 긴장 상태." },
      { word: "정신 치료", description: "정신 건강 문제를 다루는 치료." },
      {
        word: "마음 챙김",
        description: "현재 순간에 집중하는 정신적 연습.",
      },
      {
        word: "긍정적 사고",
        description: "긍정적인 방식으로 생각하는 습관.",
      },
    ],
  },
  {
    name: "예방 및 관리",
    words: [
      {
        word: "건강검진",
        description: "정기적으로 건강 상태를 점검하는 것.",
      },
      {
        word: "예방 접종",
        description: "질병을 예방하기 위해 백신을 맞는 것.",
      },
      {
        word: "검진",
        description: "질병이나 이상을 확인하기 위한 검사.",
      },
      {
        word: "정기 검사",
        description: "건강 상태를 정기적으로 검사하는 것.",
      },
      { word: "스크리닝", description: "질병의 조기 발견을 위한 검사." },
      { word: "건강 보험", description: "의료비를 지원하는 보험." },
      {
        word: "예방 의학",
        description: "질병을 예방하는 데 중점을 둔 의학.",
      },
      {
        word: "건강 관리 계획",
        description: "개인의 건강을 유지하기 위한 계획.",
      },
      { word: "병원", description: "의료 서비스를 제공하는 기관." },
      { word: "클리닉", description: "외래 진료를 제공하는 의료 기관." },
    ],
  },
  {
    name: "식생활",
    words: [
      { word: "영양소", description: "신체가 필요로 하는 필수 성분." },
      { word: "비타민", description: "신체 기능을 돕는 필수 영양소." },
      {
        word: "미네랄",
        description: "신체 기능을 유지하는 데 필요한 무기질.",
      },
      { word: "항산화제", description: "세포 손상을 방지하는 물질." },
      { word: "식단", description: "정해진 음식의 조합." },
      { word: "건강 식품", description: "건강에 도움이 되는 음식." },
      { word: "슈퍼푸드", description: "영양가가 높은 음식." },
      { word: "식이섬유", description: "소화를 돕는 섬유질." },
      { word: "단백질", description: "근육을 만드는 필수 영양소." },
      { word: "저지방", description: "지방 함량이 적은 음식." },
    ],
  },
  {
    name: "생활 습관",
    words: [
      { word: "수면", description: "충분한 잠을 자는 것." },
      { word: "휴식", description: "몸과 마음을 쉬게 하는 것." },
      {
        word: "규칙적인 생활",
        description: "일정한 생활 패턴을 유지하는 것.",
      },
      { word: "위생", description: "청결을 유지하는 것." },
      { word: "금연", description: "담배를 피지 않는 것." },
      { word: "절주", description: "알코올 섭취를 제한하는 것." },
      { word: "스트레칭", description: "근육을 늘리는 운동." },
      { word: "걷기", description: "건강을 위해 걷는 운동." },
      { word: "재충전", description: "에너지를 다시 채우는 것." },
      {
        word: "자외선 차단",
        description: "피부를 자외선으로부터 보호하는 것.",
      },
    ],
  },
  {
    name: "질병 및 치료",
    words: [
      { word: "면역력", description: "질병에 대항하는 신체의 능력." },
      { word: "감염", description: "병원체가 신체에 침입하는 것." },
      {
        word: "염증",
        description: "신체의 방어 반응으로 나타나는 증상.",
      },
      { word: "항생제", description: "박테리아 감염을 치료하는 약물." },
      { word: "백신", description: "질병을 예방하기 위한 예방 접종." },
      { word: "수술", description: "의학적 문제를 해결하기 위한 절차." },
      {
        word: "약물",
        description: "질병을 치료하거나 증상을 완화하는 약.",
      },
      { word: "재활", description: "질병이나 부상 후 회복을 돕는 치료." },
      { word: "물리치료", description: "신체 기능 회복을 위한 치료." },
      { word: "응급처치", description: "응급 상황에서 취하는 조치." },
    ],
  },
  {
    name: "건강 상태",
    words: [
      { word: "심혈관", description: "심장과 혈관의 건강 상태." },
      { word: "혈압", description: "혈액이 혈관을 지나는 압력." },
      { word: "콜레스테롤", description: "혈액 내 지방 성분." },
      { word: "당뇨", description: "혈당 조절이 어려운 상태." },
      { word: "비만", description: "과도한 체지방이 축적된 상태." },
      { word: "골다공증", description: "뼈가 약해지는 질환." },
      { word: "관절염", description: "관절에 염증이 생기는 질환." },
      { word: "천식", description: "기관지가 좁아지는 질환." },
      { word: "알레르기", description: "면역 체계의 과민 반응." },
      {
        word: "소화",
        description: "음식을 분해하여 영양소를 흡수하는 과정.",
      },
    ],
  },
];

const MyPage = ({ setBackgroundMusic }) => {
  useEffect(() => {
    setBackgroundMusic(false);
    return () => setBackgroundMusic(true);
  }, [setBackgroundMusic]);
  return (
    <MainContainer>
      <Header />

      <SectionTitle>참여한 퀴즈 목록</SectionTitle>
      <QuizTable>
        <thead>
          <tr>
            <TableHeader>방 이름</TableHeader>
            <TableHeader>승패</TableHeader>
            <TableHeader>점수</TableHeader>
            <TableHeader>랭킹</TableHeader>
            <TableHeader>날짜</TableHeader>
            <TableHeader>시간</TableHeader>
          </tr>
        </thead>
        <tbody>
          {quizHistory.map((quiz, index) => (
            <tr key={index}>
              <TableCell>{quiz.roomName}</TableCell>
              <TableCell>{quiz.result}</TableCell>
              <TableCell>{quiz.score}</TableCell>
              <TableCell>{quiz.rank}</TableCell>
              <TableCell>{quiz.date}</TableCell>
              <TableCell>{quiz.time}</TableCell>
            </tr>
          ))}
        </tbody>
      </QuizTable>

      <SectionTitle>게임 카테고리와 단어 설명</SectionTitle>
      <ScrollContainer>
        {categories.map((category, index) => (
          <CategoryContainer key={index}>
            <CategoryTitle>{category.name}</CategoryTitle>
            <WordList>
              {category.words.map((wordItem, wordIndex) => (
                <WordItem key={wordIndex}>
                  <strong>{wordItem.word}</strong>:{" "}
                  <WordDescription>{wordItem.description}</WordDescription>
                </WordItem>
              ))}
            </WordList>
          </CategoryContainer>
        ))}
      </ScrollContainer>

      <Footer>
        <p>성공회대 7팀</p>
        <p>비즈니스 문의 yurim0725@naver.com</p>
      </Footer>
    </MainContainer>
  );
};

export default MyPage;
