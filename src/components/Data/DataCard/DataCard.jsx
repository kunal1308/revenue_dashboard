import React from 'react';
import styles from './DataCard.module.css';

const DataCard = ({image, name, earnings, growth, growth1, period}) => {
  return (
    <div className={styles.wrapper}>
        <img src={image} alt="" />
        <div className={styles.cardInfo}>
            <p>{name}</p>
            <h3>{earnings}</h3>
            <div><span className={styles.g1}>{growth}</span><span className={styles.g2}>{growth1}</span> this {period}</div>
        </div>
        </div>
  )
}

export default DataCard
