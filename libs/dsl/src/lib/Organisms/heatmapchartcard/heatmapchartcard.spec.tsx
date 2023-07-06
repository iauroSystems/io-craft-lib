import {render} from '@testing-library/react';

import Heatmapchartcard from './heatmapchartcard';

describe('Heatmapchartcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Heatmapchartcard/>);
    expect(baseElement).toBeTruthy();
  });
});
