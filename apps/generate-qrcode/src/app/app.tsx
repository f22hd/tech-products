import React from 'react';
import { UiFooter } from '@tech-products/ui-footer';
import './app.scss';
import { FormContainer } from '../components/form-container/form-container';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <main className="lg:container lg:mx-auto  flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-5 mt-4">
          <FormContainer />
          <UiFooter />
        </div>
      </main>
    </div>
  );
};

export default App;
