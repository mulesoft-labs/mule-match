import React      from 'react';
import propTypes  from './PropTypes';
import styles     from './Card.css';

const Card = ({
  item
}) => (
  <div className={styles.card}>
    <img className={styles.logo} alt={item.title} src={item.pic} />
    <span className={styles.title}>{item.title}</span>
    <span className={styles.description}>{item.description}</span>
  </div>
);

Card.propTypes = propTypes;
export default Card;
