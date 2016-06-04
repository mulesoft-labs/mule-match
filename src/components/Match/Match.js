import React      from 'react';
import { Card }   from 'components';
import propTypes  from './PropTypes';
import styles     from './Match.css';

const Match = ({
  match,
  potentialMatches
}) => (
  <div className={styles.match}>
    <div className={styles.matchItem} display-if={match}>
      <h1 className={styles.title}>It's a match!</h1>
      <Card item={match} />
      <span className={styles.moreInfo}>More info <a href={match.url} target="_blank">here</a></span>
    </div>
    <div className={styles.potentialMatches} display-if={!match}>
      <h1 className={styles.title}>No match found</h1>
      <h2 className={styles.moreInfo}>But here are some products that you might be interested in:</h2>
      <div className={styles.items}>
      {
        (potentialMatches.length > 3 ? potentialMatches.slice(0, 3) : potentialMatches)
          .map((item) => (
            <div className={styles.item} key={item.title}>
              <Card item={item} />
              <span className={styles.moreInfo}>More info <a href={item.url} target="_blank">here</a></span>
            </div>
          ))
      }
      </div>
    </div>
  </div>
);

Match.propTypes = propTypes;
export default Match;
