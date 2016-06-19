import React        from 'react';
import { shallow }  from 'enzyme';
import App          from 'src/App';

describe('App', () => {
  let initialState;
  let enhancers;
  let component;

  beforeEach(() => {
    initialState  = {};
    enhancers     = (createStore) => createStore;
    component     = shallow(
      <App
        initialState={initialState}
        enhancers={enhancers}
      />
    );
  });

  it('should render a component', () => component.should.exist);
});
