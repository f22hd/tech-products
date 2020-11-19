import React from 'react';
import './app.scss';
import Stockform from '../components/stockform/stockform';
import { UiLayout } from '@tech-products/ui-layout';
import { UiIntro } from '@tech-products/ui-intro';
import { UiFooter } from '@tech-products/ui-footer';

const introText = 'تهدف حاسبة الأسهم الى حساب متوسط سعر الأسهم الجديد بعد شراء كمية أسهم جديدة بسعر مختلف';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
      <UiLayout
        content={
            <main className="w-full md:w-1/2 p-5 mt-4">
              <UiIntro text={introText} />
              <Stockform />
              <UiFooter />
            </main>

        }
      />
  );
};

export default App;
