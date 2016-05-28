import React                    from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Card                     from 'components/Card';
import propTypes                from './PropTypes';
import styles                   from './ProductList.css';

const getRows = (allProducts) => {
  if (!allProducts.length) {
    return <div className={styles.empty}>No products to show</div>;
  }

  return (
    allProducts.map((item) => (
      <Card key={item.title} item={item} />
    ))
  );
};

const ProductList = ({
  allProducts,
  isSelected
}) => (
  <div className={styles.productList}>
    <ReactCSSTransitionGroup
      transitionName={isSelected ? 'animate-yes' : 'animate-no'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {getRows(allProducts)}
    </ReactCSSTransitionGroup>
  </div>
);

ProductList.propTypes = propTypes;
export default ProductList;
