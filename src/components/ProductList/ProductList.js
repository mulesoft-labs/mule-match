import React      from 'react';
import propTypes  from './PropTypes';
import styles     from './ProductList.css';

const getRows = (unselectedProducts) => {
  if (!unselectedProducts.length) {
    return <div className="empty">No products to show</div>;
  }
  return unselectedProducts.map((item) => (
    <div className="product" key={item.title}>
      <img className="logo" alt={item.title} src={item.pic} />
      <span className="title">{item.title}</span>
      <span className="description">{item.description}</span>
    </div>
    )
  );
};

const ProductList = ({
  unselectedProducts
}) => (
  <div className={styles.productList}>
    {getRows(unselectedProducts)}
  </div>
);

ProductList.propTypes = propTypes;
export default ProductList;
