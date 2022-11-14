import React from 'react';
import styles from './styles.module.css';


export default function CenteredContent(props) {
    return <div className={styles.centeredContainer}>
        {props.children}
    </div>
}