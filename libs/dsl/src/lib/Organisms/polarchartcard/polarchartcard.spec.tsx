import { render } from '@testing-library/react';

import Polarchartcard from './polarchartcard';

describe('Polarchartcard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Polarchartcard />);
    expect(baseElement).toBeTruthy();
  });
});
