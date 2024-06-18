import React, { useState } from 'react';
import styles from './scss/PinWheelCard.module.scss';
import FrontSide from './components/FrontSide.jsx';
import BackSide from './components/BackSide.jsx';
import BackgroundVideo from './components/Background.jsx';

const PinWheelCard = () => {
    const [Reversed, setReverse] = useState(false);

    const handleFlip = () => setReverse(!Reversed);

    return (
        <div className={styles.cardContainer}>
            <BackgroundVideo/>
            <div className={styles.card}>
                <div className={`${styles.cardInner} ${Reversed ? styles.cardReverse : ''}`}>
                    <BackSide handleFlip={handleFlip}/>
                    <FrontSide handleFlip={handleFlip}/>
                </div>
            </div>
        </div>
    );
};

export default PinWheelCard;