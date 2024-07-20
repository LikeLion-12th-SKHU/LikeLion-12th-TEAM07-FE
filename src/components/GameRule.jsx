// GameRule.js
import React from "react";
import { IoGameController } from "react-icons/io5";
import {
  ModalBackground,
  ModalContent,
  CloseButton,
  StyleFont,
  Subheading,
  Content,
} from "../css/GameRuleCss.js";
const GameRule = ({ onClose }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton size="" color="#ff0000" onClick={onClose} />
        <StyleFont>
          <IoGameController />
          게임 방법
        </StyleFont>
        <Subheading>[ 기본 룰 ]</Subheading>
        <Content>---------</Content>
        <Subheading>[ 라이어 ]</Subheading>
        <Content>-----------------</Content>
        <Subheading>[ 시민 ]</Subheading>
        <Content>--------------------</Content>
      </ModalContent>
    </ModalBackground>
  );
};

export default GameRule;
