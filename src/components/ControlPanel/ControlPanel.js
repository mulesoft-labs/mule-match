import React from 'react';
import propTypes from './PropTypes';
import styles from './ControlPanel.css';

const onIgnoreProduct = (e, currentProduct, ignoreProduct) => {
  e.preventDefault();
  ignoreProduct(currentProduct);
};

const onSelectProduct = (e, currentProduct, selectProduct) => {
  e.preventDefault();
  selectProduct(currentProduct);
};

const ControlPanel = ({
  currentProduct,
  selectProduct,
  ignoreProduct
}) => {
  if (!currentProduct) {
    return <noscript />;
  }
  return (
    <div className={styles.controlPanel}>
      <div className="button no">
        <a href="#" className="trigger" onClick={(e) => onIgnoreProduct(e, currentProduct, ignoreProduct)}></a>
      </div>
      <div className="button info">
        <a href={currentProduct.url} className="trigger" target="_blank"></a>
      </div>
      <div className="button yes">
        <a href="#" className="trigger" onClick={(e) => onSelectProduct(e, currentProduct, selectProduct)}></a>
      </div>
    </div>
  );
};

ControlPanel.propTypes = propTypes;
export default ControlPanel;
