import { render } from '@testing-library/react';

import IconsMaterial from './icons-material';

describe('IconsMaterial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconsMaterial />);
    expect(baseElement).toBeTruthy();
  });
});
