import {render} from '@testing-library/react';

import Piechartcard from './piechartcard';

describe('Piechartcard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Piechartcard/>);
    expect(baseElement).toBeTruthy();
  });
});
