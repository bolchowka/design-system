import * as React from 'react';
import { shallow } from 'enzyme';
import CloseIcon from 'react-material-icon-svg/dist/CloseIcon';

import Banner from './Banner';

describe('Banner', () => {
  it('should render banner of anty type and size', () => {
    const sizes = ['small', 'large', 'medium'];
    const types = ['info', 'warning', 'success', 'error'];
    const onClose = jest.fn();

    types.map(type => {
      sizes.map(size => {
        const component = shallow(<Banner text="Example text" type={type} size={size} onClose={onClose} />);

        expect(component).toMatchSnapshot();
      })
    })
  });

  it('should call on close on close button click', () => {
    const onClose = jest.fn();
    const component = shallow(<Banner text="Example text" onClose={onClose} />);
    component.find(CloseIcon).simulate('click')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should not render close icon when on close is not passed', () => {
    const component = shallow(<Banner text="Example text" />);
    expect(component.contains(<CloseIcon />)).toBe(false)
  })
});
