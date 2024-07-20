import React, { useRef, useEffect } from 'react';

const AutoAudio = ({ volume }) => {
    const backgroundMusic = useRef(null);

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

        document.addEventListener('click', playAudio, { once: true });

        return () => {
            document.removeEventListener('click', playAudio);
        };
    }, []);

    return (
        <audio ref={backgroundMusic} loop>
            <source src="/background.mp3" type="audio/mp3" />
        </audio>
    );
};

export default AutoAudio;
