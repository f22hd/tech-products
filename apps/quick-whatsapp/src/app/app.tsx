import React from 'react';
import {UiLayout} from '@tech-products/ui-layout'
import {UiIntro} from '@tech-products/ui-intro'
import {UiFooter} from '@tech-products/ui-footer'
import './app.scss';
import Form from './components/form/form';

const text = "لا داعي لتخزين الارقام المؤقتة ، فقط عبي النموذج واضغط على ارسال.";
export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  const content = (
    <div className="w-full md:w-1/2 p-5 mt-4">
      <UiIntro text={text} />
      <Form />
      <UiFooter />
    </div>
  );
  return (
     <UiLayout content={content} />
  );
};

export default App;
