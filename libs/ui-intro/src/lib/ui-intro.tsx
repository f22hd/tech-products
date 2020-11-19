import React from 'react';

import './ui-intro.scss';

/* eslint-disable-next-line */
export interface UiIntroProps {
  text: string;
}

export const UiIntro = ({ text }: UiIntroProps) => {
  return <p className="my-5 text-gray-700 text-center font-bold">{text}</p>;
};

export default UiIntro;
