import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({image, name, description}) => {
  return (
    <div className={styles.cardData}>
    <img src={image} alt="alt" />
    <div className={styles.info}>
    <h4>{name}</h4>
    <p>{description}</p>
    </div>
  </div>
  )
}

export default ProductCard
