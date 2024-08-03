import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ModalBackground,
    WordTopic,
    ModalContent,
    Description,
    CloseButton,
} from '../css/SuggestedWordCss.js';
import PropTypes from 'prop-types';

const SuggestedWord = ({ onClose, wordSubTopic }) => {
    return (
        <div>
            <ModalBackground>
                <ModalContent>
                    <WordTopic>
                        제시어: <div className="topic">{wordSubTopic}</div>{' '}
                        <CloseButton
                            size=""
                            color="#ff0000"
                            onClick={onClose}
                        />
                    </WordTopic>
                    <Description>
                        설명이 들어갈 곳 ( 제시어마다 설명이 있어야 해요 )
                    </Description>
                </ModalContent>
            </ModalBackground>
        </div>
    );
};
SuggestedWord.propTypes = {
    onClose: PropTypes.func.isRequired,
    wordSubTopic: PropTypes.string.isRequired,
};
export default SuggestedWord;
