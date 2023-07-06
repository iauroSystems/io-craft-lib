import {render} from '@testing-library/react';

import PolarChart from './polar-chart';

describe('PolarChart', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PolarChart/>);
    expect(baseElement).toBeTruthy();
  });
});
