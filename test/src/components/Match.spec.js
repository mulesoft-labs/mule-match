import React        from 'react';
import { shallow }  from 'enzyme';
import { Match }    from 'components';

describe('Match', () => {
  let match;
  let potentialMatches
  let component;

  beforeEach(() => {
    match             = {};
    potentialMatches  = [];
    component = shallow(
      <Match match={match} potentialMatches={potentialMatches} />
    );
  });

  it('should render a component', () => component.should.exist);
});
