import { actionTypes as featuresActionTypes } from 'domains/features';
import { actionTypes, reducers }              from 'domains/products';

describe('products reducer', () => {
  const products          = [{ id: 1, features: [1] }, { id: 2, features: [] }, { id: 3, features: [] }];
  const selectedFeature   = { id: 1 };
  const matchingProducts  = products.filter((p) => p.features.indexOf(selectedFeature.id) !== -1);

  let state;
  let action;
  let result;

  describe('when the state is empty', () => {
    before(() => {
      state = {};
    });

    describe('and no action is triggered', () => {
      before(() => {
        action  = {};
        result  = reducers(state, action);
      });

      it('should return the initial state', () => result.should.be.deep.equal(state));
    });

    describe('and products are fetched', () => {
      before(() => {
        action  = { type: actionTypes.FETCH_PRODUCTS, payload: products };
        result  = reducers(state, action);
      });

      it('should store the products', () => result.allProducts.should.be.deep.equal(products));
    });
  });

  describe('when there are products set', () => {
    before(() => {
      state = { allProducts: products };
    });

    describe('and a feature is selected', () => {
      before(() => {
        action  = { type: featuresActionTypes.SELECT_FEATURE, payload: selectedFeature };
        result  = reducers(state, action);
      });

      it('should select products matching the feature', () => result.matchingProducts.should.be.deep.equal(matchingProducts));
    });
  });
});
