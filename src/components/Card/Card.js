import React      from 'react';
import propTypes  from './PropTypes';
import styles     from './Card.css';

const Card = ({
  item
}) => (
  <div className={styles.card}>
    <div className={styles.logo}>
      <img className={styles.logoImage} alt={item.title} src={item.pic} />
    </div>
    <span className={styles.title}>{item.title}</span>
    <span className={styles.description}>{item.description}</span>
  </div>
);

Card.propTypes = propTypes;
export default Card;
