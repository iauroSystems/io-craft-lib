import { render } from '@testing-library/react';

import GenericTable from './generic-table';

describe('GenericTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericTable />);
    expect(baseElement).toBeTruthy();
  });
});
