import {render} from '@testing-library/react';

import Dsl from './dsl';

describe('Dsl', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Dsl/>);
    expect(baseElement).toBeTruthy();
  });
});
