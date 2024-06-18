import React from 'react';
import styles from '../scss/PinWheelCard.module.scss';
import video1 from '../assets/media/video1.mp4';
import video2 from '../assets/media/video2.mp4';
import video3 from '../assets/media/video3.mp4';
import video4 from '../assets/media/video4.mp4';
import video5 from '../assets/media/video5.mp4';
import video6 from '../assets/media/video6.mp4';

const videoFiles = [video1, video2, video3, video4, video5, video6];

const BackgroundVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const videoSrc = videoFiles[randomIndex];

    return (
            <video
                className={styles.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
    );
};

export default BackgroundVideo;