import React from 'react';
import { render } from '@testing-library/react';

import UiIntro from './ui-intro';

describe('UiIntro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiIntro />);
    expect(baseElement).toBeTruthy();
  });
});
