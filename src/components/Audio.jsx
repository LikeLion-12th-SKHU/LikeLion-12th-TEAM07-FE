import React from 'react';
import { AiFillSound } from 'react-icons/ai';
import { StyledAudio } from '../css/AudioCss.js';

const Audio = ({ volume, onVolumeChange }) => {
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        if (!isNaN(newVolume) && newVolume >= 0 && newVolume <= 1) {
            onVolumeChange(newVolume);
        }
    };

    return (
        <StyledAudio>
            <div className="All">
                <label className="Sound-Style" htmlFor="volume">
                    배경음악
                    <AiFillSound className="Icon-Style" />
                </label>
                <input
                    type="range"
                    id="volume"
                    min="0"
                    max="1"
                    step="0.02"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="Slider-Style"
                    style={{ '--progress': volume }}
                />
            </div>
        </StyledAudio>
    );
};

export default Audio;
