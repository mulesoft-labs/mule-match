/*
 * Simple “selector” library for Redux
 * - Selectors can compute derived data, allowing Redux to store the minimal possible state.
 * - Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 * - Selectors are composable. They can be used as input to other selectors.
 * See http://redux.js.org/docs/recipes/ComputingDerivedData.html
 */
import { createSelector } from 'reselect';

const allProducts = (state) => state.products.allProducts;

const unselectedProducts = createSelector(
  allProducts,
  items => (items ? items.filter((item) => !item.selected) : [])
);

const currentProduct = createSelector(
  unselectedProducts,
  items => items[0]
);

export default {
  allProducts,
  unselectedProducts,
  currentProduct
};
