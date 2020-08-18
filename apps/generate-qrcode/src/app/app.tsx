import React from 'react';
import { UiFooter } from '@tech-products/ui-footer';
import { UiLayout } from '@tech-products/ui-layout';

import './app.scss';
import { FormContainer } from '../components/form-container/form-container';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  const content = (
    <div className="w-full md:w-1/2 p-5 mt-4">
      <FormContainer />
      <UiFooter />
    </div>
  );
  return (
    <div>
      <UiLayout content={content} />
    </div>
  );
};

export default App;
