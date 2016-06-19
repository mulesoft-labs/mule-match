import React            from 'react';
import { shallow }      from 'enzyme';
import { ControlPanel } from 'components';

describe('ControlPanel', () => {
  let currentFeature;
  let selectFeature;
  let ignoreFeature;
  let component;

  beforeEach(() => {
    currentFeature = {};
    selectFeature = () => null;
    ignoreFeature = () => null;
    component = shallow(
      <ControlPanel
        currentFeature={currentFeature}
        selectFeature={selectFeature}
        ignoreFeature={ignoreFeature}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
