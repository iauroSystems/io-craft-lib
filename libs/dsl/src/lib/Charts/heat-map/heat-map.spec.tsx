import {render} from '@testing-library/react';

import HeatMap from './heat-map';

describe('HeatMap', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<HeatMap/>);
    expect(baseElement).toBeTruthy();
  });
});
