import React, { useState } from "react";

import {
  CreateGameContainer,
  Row1,
  Row2,
  Row3,
  DetailBox,
  Label,
  Input,
  InputTitle,
  TextArea,
  CreateButton,
  Cancel,
} from "../css/SettingNewGameCss.js";

const SettingNewGame = ({ onCreate, onClose }) => {
  const [gameName, setGameName] = useState("");
  const [playerCount, setPlayerCount] = useState(2);
  const [votingTimeLimit, setVotingTimeLimit] = useState();
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateGame = () => {
    if (gameName && playerCount && votingTimeLimit && topic) {
      onCreate(gameName, playerCount, votingTimeLimit, topic, description);
      onClose();
    }
  };

  return (
    <CreateGameContainer>
      <Row1>
        <Label htmlFor="gameName">방 제목</Label>
        <InputTitle
          id="gameName"
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </Row1>
      <Row2>
        <DetailBox>
          <Label htmlFor="playerCount">플레이어 수</Label>
          <Input
            id="playerCount"
            type="number"
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
          />
        </DetailBox>
        <DetailBox>
          <Label htmlFor="votingTimeLimit">투표 시간(초)</Label>
          <Input
            id="votingTimeLimit"
            type="number"
            value={votingTimeLimit}
            onChange={(e) => setVotingTimeLimit(e.target.value)}
          />
        </DetailBox>
        <DetailBox>
          <Label htmlFor="topic">주제</Label>
          <Input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </DetailBox>
      </Row2>
      <Row3>
        <Label htmlFor="description">게임방 설명</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Row3>
      <Row2>
        <Cancel>취소</Cancel>
        <CreateButton onClick={handleCreateGame}>방 만들기</CreateButton>
      </Row2>
    </CreateGameContainer>
  );
};

export default SettingNewGame;
