import * as React from 'react';
import { render } from 'test-utils';
import { InAppMessageImage } from './InAppMessageImage';

const defaultProps = {
  src: 'https://cdn.livechat-static.com/api/file/v2/lc/att-old/8656216/fe28d6850106f65c9207f3dcea091099/product-cards-shopify-preview.gif',
  alt: 'InAppMessage',
};

describe('<InAppMessageImage> component', () => {
  it('should render', () => {
    const { container } = render(<InAppMessageImage {...defaultProps} />);
    expect(container.firstChild).toBeVisible();
  });
});
