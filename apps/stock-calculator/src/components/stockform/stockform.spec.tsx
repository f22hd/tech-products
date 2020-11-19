import React from 'react';
import { render } from '@testing-library/react';

import Stockform from './stockform';

describe('Stockform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stockform />);
    expect(baseElement).toBeTruthy();
  });
});
