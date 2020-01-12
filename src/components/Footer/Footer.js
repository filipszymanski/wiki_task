import React from 'react';
import styles from './Footer.module.scss'

const footer = () => {
    return (
        <div className={ styles.HeartWrapper }>
            <div className={ styles.FavHeartText }>Made with</div>
            <div className={ styles.FavHeart }></div>
        </div>
    )
}
export default footer;