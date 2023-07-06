import {render} from '@testing-library/react';

import Radarchartcard from './radarchartcard';

describe('Radarchartcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Radarchartcard/>);
    expect(baseElement).toBeTruthy();
  });
});
