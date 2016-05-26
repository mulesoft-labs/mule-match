import React                          from 'react';
import { ControlPanel, ProductList }  from 'components';
import propTypes                      from './PropTypes';
import styles                         from './Home.css';

const Home = ({
  allProducts,
  currentProduct,
  isSelected,
  selectProduct,
  ignoreProduct
}) => (
  <div className={styles.home}>
    <div className="banner">
      <div className="logo"></div>
      <div className="info">
        <h1 className="title">Mule match</h1>
        <p className="description">Find the right app for you with this simple swiping app!</p>
      </div>
    </div>
    <div className="body">
      <ProductList
        allProducts={allProducts}
        isSelected={isSelected}
      />
      <ControlPanel
        currentProduct={currentProduct}
        selectProduct={selectProduct}
        ignoreProduct={ignoreProduct}
      />
    </div>
  </div>
);

Home.propTypes = propTypes;
export default Home;
