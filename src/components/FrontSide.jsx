import React from 'react';
import styles from '../scss/PinWheelCard.module.scss';
import Links from '../Links.json';
import { version } from '/package.json';

const FrontSide = ({ handleFlip }) => {
    return (
        <>
            <div className={styles.cardFront}>
                <div className={styles.avatar}>
                    <img
                        src='https://0.gravatar.com/avatar/b700a93656ece5fb9b0f3e8384ab39f239a43d7b76361a00f0fa515b4d8a18cf?size=256'/>
                </div>
                <h1>Stepan Mamashin</h1>
                <p className={styles.superText}>ReactJS: ON</p>
                <div className={styles.links}>
                    {Links.map((l, index) => (
                        <a key={index} href={l.href}>
                            <img src={l.src} alt="Link"/>
                        </a>
                    ))}
                </div>
                <button onClick={handleFlip}>
                    reverse card
                </button>
                <span className={styles.v}>v{version}</span>
            </div>
        </>
    );
};

export default FrontSide;