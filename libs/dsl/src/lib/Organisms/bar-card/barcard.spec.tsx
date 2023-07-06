import {render} from '@testing-library/react';

import Barcard from './barcard';

describe('Barcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Barcard/>);
    expect(baseElement).toBeTruthy();
  });
});
