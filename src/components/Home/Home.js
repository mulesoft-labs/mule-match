import React  from 'react';
import {
  ControlPanel,
  ProductList,
  Match
} from 'components';
import propTypes  from './PropTypes';
import styles     from './Home.css';

const Home = ({
  allProducts,
  currentProduct,
  isSelected,
  selectProduct,
  ignoreProduct
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
    <Match display-if={isSelected && currentProduct.title === 'Data Gateway'} product={currentProduct} />
  </div>
);

Home.propTypes = propTypes;
export default Home;
