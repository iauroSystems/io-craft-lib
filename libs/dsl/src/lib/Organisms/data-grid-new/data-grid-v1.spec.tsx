import {render} from '@testing-library/react';

import DataGrid from './data-grid-v1';

describe('DataGrid', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<DataGrid/>);
    expect(baseElement).toBeTruthy();
  });
});
