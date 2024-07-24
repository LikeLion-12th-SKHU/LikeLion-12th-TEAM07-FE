import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoAudio = ({ volume }) => {
    const backgroundMusic = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const backgroundAudio = backgroundMusic.current;
        if (backgroundAudio) {
            backgroundAudio.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        const playAudio = () => {
            const backgroundAudio = backgroundMusic.current;
            if (backgroundAudio && backgroundAudio.paused) {
                backgroundAudio.play().catch((error) => {
                    console.log('노래 플레이 에러:', error);
                });
            }
        };

        const handleInteraction = () => {
            playAudio();
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    useEffect(() => {
        const backgroundAudio = backgroundMusic.current;
        if (backgroundAudio && backgroundAudio.paused) {
            backgroundAudio.play().catch((error) => {
                console.log('노래 플레이 에러:', error);
            });
        }
    }, [location]);

    return (
        <audio ref={backgroundMusic} loop>
            <source src="/background.mp3" type="audio/mp3" />
        </audio>
    );
};

export default AutoAudio;
