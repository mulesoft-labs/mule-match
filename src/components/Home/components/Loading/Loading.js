import React  from 'react';
import styles from './Loading.css';

const Loading = () => (
  <div className={styles.loading}>
    <div className="sk-three-bounce">
      <span className={styles.info}>Loading features..</span>
      <div className="sk-child sk-bounce1"></div>
      <div className="sk-child sk-bounce2"></div>
      <div className="sk-child sk-bounce3"></div>
    </div>
  </div>
);

export default Loading;
