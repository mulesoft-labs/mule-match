import React            from 'react';
import { shallow }      from 'enzyme';
import { FeatureList }  from 'components';

describe('FeatureList', () => {
  let allFeatures;
  let isSelected;
  let component;

  beforeEach(() => {
    allFeatures = [];
    isSelected = true;
    component = shallow(
      <FeatureList
        allFeatures={allFeatures}
        isSelected={isSelected}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
