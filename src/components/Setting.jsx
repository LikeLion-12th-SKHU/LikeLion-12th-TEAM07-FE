import React, { useState, useRef, useEffect } from 'react';
import { IoMdSettings } from 'react-icons/io';
import Audio from './Audio';
import EffectSound from './EffectSound';

import {
    ModalBackground,
    CloseButton,
    ModalContent,
    StyleFont,
    SoundSetting,
} from '../css/SettingCss.js';
const Setting = ({ onClose, onVolumeChange }) => {
    const [volume, setVolume] = useState(
        parseFloat(localStorage.getItem('volume')) || 1
    );
    const effectSoundRef = useRef(null);

    useEffect(() => {
        onVolumeChange(volume);
        localStorage.setItem('volume', volume);
    }, [volume, onVolumeChange]);
    const handleClose = () => {
        effectSoundRef.current.playSound();
        setTimeout(() => {
            onClose();
        });
    };
    return (
        <>
            <ModalBackground>
                <ModalContent>
                    <CloseButton
                        size=""
                        color="#ff0000"
                        onClick={handleClose}
                    />
                    <StyleFont>
                        <IoMdSettings size="42" />
                        설정
                    </StyleFont>
                    <SoundSetting>
                        <Audio volume={volume} onVolumeChange={setVolume} />
                    </SoundSetting>
                </ModalContent>
            </ModalBackground>
            <EffectSound ref={effectSoundRef} />
        </>
    );
};

export default Setting;
