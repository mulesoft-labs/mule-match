import React        from 'react';
import { shallow }  from 'enzyme';
import { Card }     from 'components';

describe('Card', () => {
  let item;
  let component;

  beforeEach(() => {
    item      = { title: 'item-title' };
    component = shallow(<Card item={item} />);
  });

  it('should render a component', () => component.should.exist);
});
