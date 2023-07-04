import { render } from '@testing-library/react';

import BubbleChart from './bubble-chart';

describe('BubbleChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BubbleChart />);
    expect(baseElement).toBeTruthy();
  });
});
