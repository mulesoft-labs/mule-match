import React  from 'react';
import {
  ControlPanel,
  FeatureList,
  Match
} from 'components';
import propTypes  from './PropTypes';
import styles     from './Home.css';

const Home = ({
  allFeatures,
  currentFeature,
  isSelected,
  selectFeature,
  ignoreFeature
}) => (
  <div className={styles.home}>
    <div className={styles.banner}>
      <div className={styles.logo}></div>
      <div className={styles.info}>
        <h1 className={styles.title}>Mule match</h1>
        <p className={styles.description}>Find the right app for you with this simple swiping app!</p>
      </div>
    </div>
    <div className={styles.body}>
      <FeatureList
        allFeatures={allFeatures}
        isSelected={isSelected}
      />
      <ControlPanel
        currentFeature={currentFeature}
        selectFeature={selectFeature}
        ignoreFeature={ignoreFeature}
      />
    </div>
    <Match display-if={isSelected && currentFeature.title === 'Data Gateway'} feature={currentFeature} />
  </div>
);

Home.propTypes = propTypes;
export default Home;
