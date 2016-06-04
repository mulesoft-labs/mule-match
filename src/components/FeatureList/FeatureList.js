import React                    from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Card                     from 'components/Card';
import propTypes                from './PropTypes';
import styles                   from './FeatureList.css';

const FeatureList = ({
  allFeatures,
  isSelected
}) => (
  <div className={styles.featureList}>
    <ReactCSSTransitionGroup
      className={styles.items}
      display-if={allFeatures && allFeatures.length}
      transitionName={{ leave: isSelected ? styles.animateYesLeave : styles.animateNoLeave }}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {
        allFeatures.map((item) => (
          <Card key={item.title} item={item} />
        ))
      }
    </ReactCSSTransitionGroup>
    <div className={styles.empty}>
      <span>No more features to show ☹</span>
    </div>
  </div>
);

FeatureList.propTypes = propTypes;
export default FeatureList;
