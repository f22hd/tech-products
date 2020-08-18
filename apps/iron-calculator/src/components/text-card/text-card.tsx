import React from 'react';

import './text-card.scss';

/* eslint-disable-next-line */
export interface TextCardProps {
  label: string;
  text: string;
}

export const TextCard = ({ label, text }: TextCardProps) => {
  return (
    <div>
      <span className="text-gray-600 px-1">{label}</span>
      <p className="text-2xl">{text}</p>
    </div>
  );
};

export default TextCard;
