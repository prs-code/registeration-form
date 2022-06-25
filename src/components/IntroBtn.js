import React from 'react';
import {Link} from "react-router-dom";

import styles from './Intro.module.css';

const IntroBtn = () => {
    return (
        <div className={styles.container}>
                <Link to="/SignUp"><button className={styles.singUp}>Sign Up</button></Link>
        </div>
    );
};

export default IntroBtn;