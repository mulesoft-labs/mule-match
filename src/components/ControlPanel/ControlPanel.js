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
    <div display-if={currentFeature} className="controls">
      <div className="button no">
        <a href="#" className="trigger" onClick={(e) => onIgnoreFeature(e, currentFeature, ignoreFeature)}></a>
      </div>
      <div className="button info">
        <a href={currentFeature.url} className="trigger" target="_blank"></a>
      </div>
      <div className="button yes">
        <a href="#" className="trigger" onClick={(e) => onSelectFeature(e, currentFeature, selectFeature)}></a>
      </div>
    </div>
  </div>
);

ControlPanel.propTypes = propTypes;
export default ControlPanel;
