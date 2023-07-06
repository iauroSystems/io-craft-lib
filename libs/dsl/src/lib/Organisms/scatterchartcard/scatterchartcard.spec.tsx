import {render} from '@testing-library/react';

import Scatterchartcard from './scatterchartcard';

describe('Scatterchartcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Scatterchartcard/>);
    expect(baseElement).toBeTruthy();
  });
});
