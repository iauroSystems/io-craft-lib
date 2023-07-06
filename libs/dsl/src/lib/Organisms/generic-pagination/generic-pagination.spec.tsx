import { render } from '@testing-library/react';

import GenericPagination from './generic-pagination';

describe('GenericPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericPagination />);
    expect(baseElement).toBeTruthy();
  });
});
