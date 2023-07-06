import {render} from '@testing-library/react';

import MultilineText1 from './multiline-text1';

describe('MultilineText1', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<MultilineText1/>);
    expect(baseElement).toBeTruthy();
  });
});
