import React                    from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Card                     from 'components/Card';
import propTypes                from './PropTypes';
import styles                   from './FeatureList.css';

const getRows = (allFeatures) => {
  if (!allFeatures.length) {
    return <div className={styles.empty}>No features to show</div>;
  }

  return (
    allFeatures.map((item) => (
      <Card key={item.title} item={item} />
    ))
  );
};

const FeatureList = ({
  allFeatures,
  isSelected
}) => (
  <div className={styles.featureList}>
    <ReactCSSTransitionGroup
      transitionName={isSelected ? 'animate-yes' : 'animate-no'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {getRows(allFeatures)}
    </ReactCSSTransitionGroup>
  </div>
);

FeatureList.propTypes = propTypes;
export default FeatureList;
