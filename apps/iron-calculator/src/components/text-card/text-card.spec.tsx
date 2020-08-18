import React from 'react';
import { render } from '@testing-library/react';

import TextCard from './text-card';

describe('TextCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextCard />);
    expect(baseElement).toBeTruthy();
  });
});
