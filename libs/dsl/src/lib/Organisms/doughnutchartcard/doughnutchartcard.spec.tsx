import { render } from '@testing-library/react';

import Doughnutchartcard from './doughnutchartcard';

describe('Doughnutchartcard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Doughnutchartcard />);
    expect(baseElement).toBeTruthy();
  });
});
