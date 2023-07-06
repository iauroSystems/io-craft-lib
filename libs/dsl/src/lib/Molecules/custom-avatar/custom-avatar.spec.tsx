import { render } from '@testing-library/react';

import CustomAvatar from './custom-avatar';

describe('CustomAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
