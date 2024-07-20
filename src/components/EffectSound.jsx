import React, { useRef, useImperativeHandle } from 'react';

const EffectSound = React.forwardRef(({ volume = 1 }, ref) => {
    const audioRef = useRef(null);

    useImperativeHandle(ref, () => ({
        playSound: () => {
            if (audioRef.current) {
                audioRef.current.volume = volume;
                audioRef.current.play();
            }
        },
    }));
    return (
        <audio ref={audioRef}>
            <source src="/clickButton.mp3" type="audio/mp3" />
        </audio>
    );
});

export default EffectSound;
