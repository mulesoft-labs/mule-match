import React        from 'react';
import { shallow }  from 'enzyme';
import { Home }     from 'components';

describe('Home', () => {
  let allFeatures;
  let currentFeature;
  let isSelected;
  let matchingProducts;
  let match;
  let fetchFeatures;
  let fetchProducts;
  let selectFeature;
  let ignoreFeature;
  let component;

  beforeEach(() => {
    allFeatures = [];
    currentFeature = {};
    isSelected = true;
    matchingProducts = [];
    match = {};
    fetchFeatures = () => {};
    fetchProducts = () => {};
    selectFeature = () => {};
    ignoreFeature = () => {};
    component = shallow(
      <Home
        allFeatures={allFeatures}
        currentFeature={currentFeature}
        isSelected={isSelected}
        matchingProducts={matchingProducts}
        match={match}
        fetchFeatures={fetchFeatures}
        fetchProducts={fetchProducts}
        selectFeature={selectFeature}
        ignoreFeature={ignoreFeature}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
