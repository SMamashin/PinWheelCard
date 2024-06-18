import React, { useState } from 'react';
import styles from '../scss/PinWheelCard.module.scss';
import Skills from '../Skills.json';

const BackSide = ({ handleFlip }) => {
    const mainSkills = Skills.filter(skill => skill.category === 'mainSkills');
    const tools = Skills.filter(skill => skill.category === 'tools');
    const [isDropShadowOn, setIsDropShadowOn] = useState(true);

    const toggleDropShadow = () => {
        setIsDropShadowOn(!isDropShadowOn);
    }

    const getShadowStyle = () => {
        return isDropShadowOn ? {} : { boxShadow: 'none', filter: 'none', textShadow: 'none' };
    }

    return (
        <div className={styles.cardBack}>
            <p className={styles.LightText} style={getShadowStyle()}>Hello to you! 👋</p>
            <p className={styles.LightText} style={getShadowStyle()}>
                Welcome to my site! <br/>
                My name is Stepan 45 y.o <br/>
                I develop in
                <span className={`${styles.Lang} ${styles.Py}`} style={getShadowStyle()}>Python</span>,
                <span className={`${styles.Lang} ${styles.Js}`} style={getShadowStyle()}>JavaScript</span>, and
                <span className={`${styles.Lang} ${styles.Ts}`} style={getShadowStyle()}>TypeScript</span>. <br/>
                I have some experience with React and Svelte.
                I also accept static development very well!
            </p>
            <span className={styles.LightText} style={getShadowStyle()}>My main skills:</span>
            <div className={styles.Skills}>
                {mainSkills.map((s, index) => (
                    <a key={index} href={s.href}>
                        <img className={styles[s.styleClass]} style={getShadowStyle()} src={s.src}
                             alt="Skill Icon"/>
                    </a>
                ))}
            </div>
            <span className={styles.LightText} style={getShadowStyle()}>My skills to use:</span>
            <div className={styles.Skills}>
                {tools.map((s, index) => (
                    <a key={index} href={s.href}>
                        <img className={styles[s.styleClass]} style={getShadowStyle()} src={s.src}
                             alt="Skill Icon"/>
                    </a>
                ))}
            </div>
            <span className={styles.LightText} style={getShadowStyle()}>You can see my projects <a>here</a></span>
            <div className={styles.BackButtons}>
                <button onClick={handleFlip}>
                    reverse card
                </button>
                <button onClick={toggleDropShadow}>
                    {isDropShadowOn ? 'light: on' : 'light: off'}
                </button>
            </div>
        </div>
    );
};

export default BackSide;