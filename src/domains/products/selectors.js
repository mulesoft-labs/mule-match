/*
 * Simple “selector” library for Redux
 * - Selectors can compute derived data, allowing Redux to store the minimal possible state.
 * - Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 * - Selectors are composable. They can be used as input to other selectors.
 * See http://redux.js.org/docs/recipes/ComputingDerivedData.html
 */
import { createSelector } from 'reselect';

const matchingProducts  = (state) => state.products.matchingProducts;

const match = createSelector(
  matchingProducts,
  items => (items && items.length === 1 ? items[0] : null)
);

export default {
  matchingProducts,
  match
};
