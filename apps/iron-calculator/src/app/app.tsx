import React from 'react';
import { UiIntro } from '../../../../libs/ui-intro/src';
import { UiLayout } from '../../../../libs/ui-layout/src';
import { UiFooter } from '../../../../libs/ui-footer/src';
import { CalcForm } from '../components/calc-form/calc-form';

import './app.scss';
const introText =
  'استمراراً بفكرة المنتجات التقنية هنا منتج لحساب تكاليف الحديد :)';

export const App = () => {
  const content = (
    <div className="w-full md:w-1/2 px-3 mt-4">
      <UiIntro text={introText} />
      <CalcForm />
      <UiFooter />
    </div>
  );
  return <UiLayout content={content} />;
};

export default App;
