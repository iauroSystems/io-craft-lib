import {render} from '@testing-library/react';

import Bubblechartcard from './bubblechartcard';

describe('Bubblechartcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Bubblechartcard/>);
    expect(baseElement).toBeTruthy();
  });
});
