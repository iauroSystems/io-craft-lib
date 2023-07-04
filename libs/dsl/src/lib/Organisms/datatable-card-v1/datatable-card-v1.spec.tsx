import { render } from '@testing-library/react';

import DatatableCardV1 from './datatable-card-v1';

describe('DatatableCardV1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatatableCardV1 />);
    expect(baseElement).toBeTruthy();
  });
});
