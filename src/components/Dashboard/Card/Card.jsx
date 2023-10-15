import React from 'react';
import styles from './Card.module.css'

const Card = ({image,name,post}) => {
  return (
    <div className={styles.cardWrapper}>
    <div className={styles.cardData}>
      <img src={image} alt="alt" />
      <div className={styles.info}>
      <h4>{name}</h4>
      <p>{post}</p>
      </div>
    </div>
    <button>&raquo;</button>
  </div>
  )
}

export default Card
