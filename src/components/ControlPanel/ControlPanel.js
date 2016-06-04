import React from 'react';
import propTypes from './PropTypes';
import styles from './ControlPanel.css';

const onIgnoreFeature = (e, currentFeature, ignoreFeature) => {
  e.preventDefault();
  ignoreFeature(currentFeature);
};

const onSelectFeature = (e, currentFeature, selectFeature) => {
  e.preventDefault();
  selectFeature(currentFeature);
};

const ControlPanel = ({
  currentFeature,
  selectFeature,
  ignoreFeature
}) => (
  <div className={styles.controlPanel}>
    <div display-if={currentFeature} className={styles.buttonNo} onClick={(e) => onIgnoreFeature(e, currentFeature, ignoreFeature)}>
      <a href="#" className={styles.triggerNo} ></a>
    </div>
    <div display-if={currentFeature} className={styles.buttonInfo}>
      <a href={currentFeature.url} className={styles.triggerInfo} target="_blank"></a>
    </div>
    <div display-if={currentFeature} className={styles.buttonYes} onClick={(e) => onSelectFeature(e, currentFeature, selectFeature)}>
      <a href="#" className={styles.triggerYes}></a>
    </div>
  </div>
);

ControlPanel.propTypes = propTypes;
export default ControlPanel;
