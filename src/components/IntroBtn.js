import React from 'react';
import {Link} from "react-router-dom";

import styles from './Intro.module.css';

const IntroBtn = () => {
    return (
        <div className={styles.container}>
                <Link className={styles.singUp} to="/SignUp">Sign Up</Link>
        </div>
    );
};

export default IntroBtn;