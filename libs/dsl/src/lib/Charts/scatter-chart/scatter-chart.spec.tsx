import { render } from '@testing-library/react';

import ScatterChart from './scatter-chart';

describe('ScatterChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScatterChart />);
    expect(baseElement).toBeTruthy();
  });
});
