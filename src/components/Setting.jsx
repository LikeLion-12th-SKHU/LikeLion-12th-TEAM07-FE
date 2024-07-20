import React, { useState, useEffect } from 'react';
import { IoMdSettings } from 'react-icons/io';
import Audio from './Audio';
import {
    ModalBackground,
    CloseButton,
    ModalContent,
    StyleFont,
    SoundSetting,
} from '../Css/SettingCss.js';
const Setting = ({ onClose, onVolumeChange }) => {
    const [volume, setVolume] = useState(
        parseFloat(localStorage.getItem('volume')) || 1
    );

    useEffect(() => {
        onVolumeChange(volume);
        localStorage.setItem('volume', volume);
    }, [volume, onVolumeChange]);

    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton size="" color="#ff0000" onClick={onClose} />
                <StyleFont>
                    <IoMdSettings size="42" />
                    설정
                </StyleFont>
                <SoundSetting>
                    <Audio volume={volume} onVolumeChange={setVolume} />
                </SoundSetting>
            </ModalContent>
        </ModalBackground>
    );
};

export default Setting;
