import React      from 'react';
import { Card }   from 'components';
import propTypes  from './PropTypes';
import styles     from './Match.css';

const Match = ({
  product
}) => (
  <div className={styles.match}>
    <h1 className={styles.title}>It's a match!</h1>
    <Card item={product} />
    <span className={styles.moreInfo}>More info <a href={product.url} target="_blank">here</a></span>
  </div>
);

Match.propTypes = propTypes;
export default Match;
