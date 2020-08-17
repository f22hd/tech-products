import React from 'react';
import { render } from '@testing-library/react';

import QrContainer from './qr-container';

describe('QrContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QrContainer />);
    expect(baseElement).toBeTruthy();
  });
});
