import React from 'react';
import styles from './styles.module.css';

export default function PictureBox({path, title}) {
    return <div><figure className={styles.figure}>
        <picture>
            <source srcSet={`${path}.webp`} />
            <img src={`${path}.png`} style={{borderRadius: "3px"}}/>
        </picture>
        <figcaption className={styles.figcaption}>
            <p>{title}</p>
        </figcaption>
    </figure></div>
}