import React from 'react';

import './unit.scss';

/* eslint-disable-next-line */
export interface UnitProps {
  text: string;
}

export const Unit = ({ text }: UnitProps) => {
  return <span className="text-gray-600 text-xs px-1">( {text} )</span>;
};

export default Unit;
