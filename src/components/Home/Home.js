import React  from 'react';
import {
  ControlPanel,
  FeatureList,
  Match
} from 'components';
import Loading    from './components/Loading/Loading.js';
import propTypes  from './PropTypes';
import styles     from './Home.css';

const Home = ({
  allFeatures,
  currentFeature,
  isSelected,
  matchingProducts,
  match,
  fetchFeatures,
  selectFeature,
  ignoreFeature
}) => {
  if (!allFeatures && fetchFeatures) {
    fetchFeatures();
  }

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.logo}></div>
        <div className={styles.info}>
          <h1 className={styles.title}>Mule match</h1>
          <p className={styles.description}>Find the right app for you with this simple swiping app!</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.features} display-if={allFeatures}>
          <FeatureList allFeatures={allFeatures} isSelected={isSelected} />
          <ControlPanel currentFeature={currentFeature}   selectFeature={selectFeature} ignoreFeature={ignoreFeature} />
        </div>
        <Loading display-if={!allFeatures} />
      </div>
      <Match display-if={match || (!currentFeature && matchingProducts)} match={match} potentialMatches={matchingProducts} />
    </div>
  );
};

Home.propTypes = propTypes;
export default Home;
