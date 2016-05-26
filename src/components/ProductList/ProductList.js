import React                    from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import propTypes                from './PropTypes';
import styles                   from './ProductList.css';

const getRows = (allProducts) => {
  if (!allProducts.length) {
    return <div className="empty">No products to show</div>;
  }

  return (
    allProducts.map((item) => (
      <div className="product" key={item.title}>
        <img className="logo" alt={item.title} src={item.pic} />
        <span className="title">{item.title}</span>
        <span className="description">{item.description}</span>
      </div>
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
